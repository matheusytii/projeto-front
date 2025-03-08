const CACHE_NAME = "ramos-multimarcas-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/style/fiat uno.jpg",
  "/style/ram 2550.jpg",
  "/style/silverado.jpg",
  "/style/fusca.jpg",
  "/style/opala.jpg",
  "/style/kadett tunado.jpg"
];

// Instalando o Service Worker e armazenando em cache os arquivos essenciais
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativando o Service Worker e limpando caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptando requisições e retornando do cache caso esteja offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});