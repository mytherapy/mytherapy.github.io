'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c102f27c4df64d20e44cee96b05af022",
"/": "c102f27c4df64d20e44cee96b05af022",
"main.dart.js": "ab947b5e1d85b0e2ca07b2642c250e33",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "700a6d79812b0162032504b682c5e9bb",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/resources/images/galaxy.jpg": "544aedee4e7a06c43d8e2be0534af2ba",
"assets/resources/images/4.jpg": "a1543ab506b4141d1f4ba2c649b66902",
"assets/resources/images/next.png": "58aa8d153c8444e2062876b491f02c33",
"assets/resources/images/5.jpg": "fdf4316e5e03e1c7426e589fd6e9c4bf",
"assets/resources/images/6.jpg": "ad0bca2b6d8866d81d65d8c5d255462b",
"assets/resources/images/2.jpg": "e3aa2683df5c6f47ff6be74cd284096b",
"assets/resources/images/3.jpg": "d804d4ebe1235d66e7f9c5f547ef1bde",
"assets/resources/images/1.jpg": "a055c74f4b64fbd57979d5960f9ed7e2",
"assets/resources/fonts/Itim-Regular.ttf": "ea9ed37af3e95dd1629a9581ceb2c4ed",
"assets/resources/fonts/Pangolin-Regular.ttf": "7810feee2a587264c0d6058d52b60ae4",
"assets/AssetManifest.json": "81823cfe1a8460a89476fb48b65c89bc",
"assets/FontManifest.json": "f6b8432b5bf5fceff497a0a3dd736ef2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
