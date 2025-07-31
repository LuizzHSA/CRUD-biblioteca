const cacheName = 'biblioteca-v1';
const filesToCache = [
    '/',
    '/livros.html',
    '/style.css',
    '/main.js',
    '/data/livros.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
