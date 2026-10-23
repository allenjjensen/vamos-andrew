// Offline support for the installed app.
// App files: try the network first (so updates show up), fall back to the saved copy when offline.
// Fonts: use the saved copy first, they never change.
const CACHE = 'vamos-v6';
const FILES = [
  './', 'index.html', 'style.css', 'app.js', 'conjugation.js', 'words.js', 'manifest.webmanifest', 'books.js', 'topics.js', 'terms.js', 'dict.js',
  'lessons/ser-estar.js', 'lessons/job-1.js', 'lessons/el-la.js', 'lessons/past-1.js',
  'lessons/numbers-1.js', 'lessons/time-1.js', 'lessons/dates-1.js', 'lessons/phone-1.js',
  'lessons/describe-1.js', 'lessons/compare-1.js', 'lessons/goingto-1.js', 'lessons/quote-1.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  // no-cache: always ask the server if there's a newer copy (GitHub Pages lets browsers keep files 10 minutes otherwise).
  e.respondWith(fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(res => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
    }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('index.html'))));
});
