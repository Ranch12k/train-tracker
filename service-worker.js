self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('train-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/icon-192.png',
        './icons/icon-512.png',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
