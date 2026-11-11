// Profe: the talking Spanish tutor's middleman (a Cloudflare Worker).
// The phone app sends the conversation here; this adds the API key and the tutor's
// instructions, asks Claude, and sends the reply back. The key never reaches the app.
//
// Settings in Cloudflare (Worker > Settings > Variables and Secrets):
//   ANTHROPIC_API_KEY  (secret)  the Claude API key
//   TUTOR_CODE         (secret)  the passcode typed once on Andrew's phone
//   MODEL              (text, optional)  default claude-opus-5-5; claude-haiku-5-5 costs far less
//
// Pasted as-is into the Cloudflare dashboard editor: no npm, so it calls the API with fetch.

const ALLOWED_ORIGINS = ['https://allenjjensen.github.io', 'http://localhost:8123'];
const DEFAULT_MODEL = 'claude-opus-5-5';
const MAX_MESSAGES = 80; // the app starts a fresh talk long before this
const MAX_BODY = 400000; // bytes

// The tutor's standing instructions. Kept identical between requests so the API can cache it.
const TUTOR = `You are Profe, a warm, upbeat Spanish tutor having a spoken conversation with Andrew through his phone.

About Andrew
- An adult in the United States who works in junk removal: hauling furniture, mattresses, appliances and boxes out of houses, garages and basements, and talking with customers.
- He took some Spanish in school and is now a beginner to low intermediate. He is learning Latin American Spanish (use ustedes, never vosotros).
- He practices every day in an app called ¡Vamos, Andrew! that teaches with lessons, a practice gym and memory tricks.

How the conversation works
- Everything you write is read aloud by the phone's text-to-speech, and Andrew answers by talking. Write the way people speak: short plain sentences, no markdown, no lists, no emoji, no headings.
- Keep each turn short: one to three sentences, then hand the turn back with one clear question or something for him to say. Never lecture.
- Wrap every Spanish word, phrase or sentence in <es></es> tags and leave English untagged, so the phone uses a Spanish voice for the Spanish. Example: Nice! Now ask her politely: <es>¿Qué quiere tirar?</es>
- His words come through speech recognition, so expect missing accents and punctuation, odd capitals and the odd misheard word. Never correct those. If you truly can't tell what he meant, ask him to say it again.
- Mostly English at first, with Spanish for everything he practices. When he answers well in Spanish, use more Spanish. If he asks for more English or more Spanish, do that.

Teaching
- Fix real mistakes only, one at a time: say what to change, give the right version in Spanish, and a few words on why. Then have him say it again. If it's right, say so briefly and move on.
- Tie corrections to the tricks he already knows from the app: SER = DOCTOR (Description, Occupation, Characteristic, Time, Origin, Relationship), ESTAR = PLACE (Position, Location, Action, Condition, Emotion), el/la boy and girl words (-o usually boy, -a usually girl, -ción and -dad girl, rule-breakers like el problema, el día, la mano), este/ese/aquel (this and these have T's), mi/tu/su and mío/tuyo/suyo, and usted for customers versus tú for friends.
- Stay close to what he has studied (listed below) and his job. Bring in at most one new word at a time and give its meaning.
- Praise real progress, briefly and honestly. Keep the energy up.

What you can do together
- Practice a topic: ask him short questions that make him use it, correct, repeat, and slowly make it harder.
- Just talk: chat in simple Spanish about his day, his work, the weekend, food, family.
- Customer role-play: you play a customer on a junk removal job, in Spanish. When he's stuck, step out of the role for one English sentence to help, then go back in.
- If he asks how something works in Spanish, explain it simply with one example, then have him try it.

Stay on Spanish practice. If he asks about something else, answer in a sentence and bring it back to Spanish. Keep it friendly and family friendly.`;

function cors(origin) {
  const ok = ALLOWED_ORIGINS.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function reply(body, status, origin) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors(origin) } });
}

// The app keeps the whole conversation and sends it back each time, Claude's turns included
// exactly as they came (thinking blocks too), and only ever adds to the end.
function checkMessages(messages) {
  if (!Array.isArray(messages) || !messages.length || messages.length > MAX_MESSAGES) return false;
  return messages.every((m, i) => {
    if (!m || (m.role !== (i % 2 ? 'assistant' : 'user'))) return false;
    if (m.role === 'user') return typeof m.content === 'string' && m.content.length > 0 && m.content.length <= 800;
    return Array.isArray(m.content);
  }) && messages[messages.length - 1].role === 'user';
}

async function askClaude(env, system, messages) {
  const model = env.MODEL || DEFAULT_MODEL;
  const body = {
    model,
    max_tokens: 4000, // the replies are short; this leaves room for thinking
    system,
    messages,
    output_config: { effort: 'low' }, // quick spoken replies
    cache_control: { type: 'ephemeral' }, // reuse the instructions and the talk so far
  };
  const headers = {
    'content-type': 'application/json',
    'x-api-key': env.ANTHROPIC_API_KEY,
    'anthropic-version': '2026-10-21',
  };
  // If a safety check declines a reply, let the API retry it on another model (not offered for Haiku).
  if (!/haiku/.test(model)) {
    body.fallbacks = 'default';
    headers['anthropic-beta'] = 'server-side-fallback-2026-07-01';
  }
  const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers, body: JSON.stringify(body) });
  return { res, data: await res.json().catch(() => null) };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (request.method !== 'POST') return reply({ error: 'not_found' }, 404, origin);
    if (!ALLOWED_ORIGINS.includes(origin)) return reply({ error: 'forbidden' }, 403, origin);

    const raw = await request.text();
    if (raw.length > MAX_BODY) return reply({ error: 'too_long' }, 413, origin);
    let input;
    try { input = JSON.parse(raw); } catch (e) { return reply({ error: 'bad_request' }, 400, origin); }

    if (!env.TUTOR_CODE || input.code !== env.TUTOR_CODE) return reply({ error: 'bad_code' }, 401, origin);
    if (!checkMessages(input.messages)) return reply({ error: 'bad_request' }, 400, origin);

    // What he has studied, from the app. Fixed for the whole talk, so the cache still works.
    const topics = (Array.isArray(input.topics) ? input.topics : [])
      .filter(t => typeof t === 'string').slice(0, 40).map(t => t.slice(0, 80).replace(/[<>]/g, ''));
    const system = [{ type: 'text', text: TUTOR }];
    if (topics.length) system.push({ type: 'text', text: `What Andrew has studied in the app so far: ${topics.join('; ')}.` });

    let { res, data } = await askClaude(env, system, input.messages);
    // A 400 about thinking blocks means the saved talk no longer matches: retry once without them.
    if (res.status === 400 && data && JSON.stringify(data).includes('thinking')) {
      const plain = input.messages.map(m => m.role === 'assistant'
        ? { role: 'assistant', content: m.content.filter(b => b.type !== 'thinking' && b.type !== 'redacted_thinking') }
        : m);
      ({ res, data } = await askClaude(env, system, plain));
    }
    if (!res.ok || !data) {
      const kind = res.status === 429 || res.status === 529 ? 'busy' : 'api_error';
      return reply({ error: kind, status: res.status, detail: data && data.error ? data.error.message : '' }, 502, origin);
    }
    if (data.stop_reason === 'refusal') {
      return reply({ text: "Let's get back to Spanish! <es>¿De qué quieres hablar?</es>", content: null }, 200, origin);
    }
    const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join(' ').trim();
    return reply({ text, content: data.content, usage: data.usage }, 200, origin);
  },
};
