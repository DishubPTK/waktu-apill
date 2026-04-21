// Service Worker for APILL PWA
const CACHE_NAME = 'apill-v1';
const urlsToCache = [
  '/waktu-apill/',
  '/waktu-apill/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Network first for API calls, cache first for app shell
  if (event.request.url.includes('script.google.com') || 
      event.request.url.includes('fonts.googleapis.com')) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchRes => {
        const resClone = fetchRes.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        return fetchRes;
      });
    }).catch(() => caches.match('/waktu-apill/'))
  );
});
