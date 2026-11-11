# Setting up Profe (the talking tutor)

Profe needs two free accounts and about 15 minutes. You do these steps yourself:
they involve creating accounts and an API key, which Claude can't do for you.

## 1. Claude API account (pays for Profe's replies)
1. Go to https://platform.claude.com and sign up or sign in.
2. **Billing:** add a small amount of prepaid credit (for example $5 to $10).
3. **Limits:** set a monthly spend limit you're comfortable with, so it can never surprise you.
4. **API keys:** create a key named `vamos-profe`. Copy it somewhere safe for step 3.
   Never paste it into the app, a chat or a file in this project.

## 2. Cloudflare account (the free middleman server)
1. Go to https://dash.cloudflare.com and sign up (the free plan is plenty).
2. Open **Workers & Pages**, then **Create**, then create a Worker from the "Hello World" starter.
   Name it `vamos-profe` and deploy it.
3. Click **Edit code**. Delete everything in the editor, paste in the whole of
   `tutor-worker/worker.js` from this project, and click **Deploy**.

## 3. Give the Worker its secrets
In the Worker, open **Settings**, then **Variables and Secrets**, and add:

| Name | Type | Value |
|---|---|---|
| `ANTHROPIC_API_KEY` | Secret | the key from step 1 |
| `TUTOR_CODE` | Secret | a passcode you make up for Andrew (a few words is fine) |
| `MODEL` | Text (optional) | leave it out for the best tutor (`claude-opus-5-5`), or set `claude-haiku-5-5` to pay much less |

Deploy again if it asks.

## 4. Send Claude the Worker's address
It looks like `https://vamos-profe.<your-name>.workers.dev`. Claude puts it in the app,
tests one real reply, and pushes the update when you say so.

## 5. Tell Andrew the passcode
The first time he opens **Talk with Profe**, the app asks for it once.

## Good to know
- The phone (Chrome) turns his voice into text; the text goes to the Worker and then to Claude.
- The passcode stops strangers from using your credit. If it ever leaks, change `TUTOR_CODE`
  in Cloudflare and give Andrew the new one.
- To see what it costs, check **Usage** on platform.claude.com after a few days.
