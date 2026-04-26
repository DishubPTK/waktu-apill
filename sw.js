// Service Worker for APILL PWA
// Build: 2026-04-26 05:29
// Updated: 2026-04-22 22:15:14
// !! Update versi ini setiap kali ada file baru !!
const CACHE_NAME = 'apill-v20';
const urlsToCache = [
  '/waktu-apill/',
  '/waktu-apill/index.html',
  '/waktu-apill/icon-192.png',
  '/waktu-apill/icon-512.png',
  '/waktu-apill/password.js'
];

// Install: cache semua file
self.addEventListener('install', event => {
  self.skipWaiting(); // langsung aktif, tidak tunggu tab lama ditutup
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate: hapus SEMUA cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        }
      }))
    ).then(() => self.clients.claim())
  );
});

// Fetch: Network first — selalu ambil dari server dulu, cache sebagai backup
self.addEventListener('fetch', event => {
  // Jangan cache request ke Apps Script atau Google API
  if (event.request.url.includes('script.google.com') ||
      event.request.url.includes('googleapis.com') ||
      event.request.url.includes('gstatic.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Network first untuk semua file app
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Simpan ke cache jika berhasil
        if (response && response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return response;
      })
      .catch(() => {
        // Offline fallback: ambil dari cache
        return caches.match(event.request)
          .then(cached => cached || caches.match('/waktu-apill/'));
      })
  );
});
