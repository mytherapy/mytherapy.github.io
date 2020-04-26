'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c102f27c4df64d20e44cee96b05af022",
"/": "c102f27c4df64d20e44cee96b05af022",
"main.dart.js": "27c68e3f43e001523141f70b6d38a267",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "700a6d79812b0162032504b682c5e9bb",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/resources/images/8.jpg": "066cfe5d9c2c7b84dcffb32f791fcf64",
"assets/resources/images/galaxy.jpg": "502721d6a86274d6b98977538b363972",
"assets/resources/images/9.jpg": "f13a747748ee3b56d775bf48cea86693",
"assets/resources/images/11.jpg": "e4ffe805cdf12ba519897275d805f4f6",
"assets/resources/images/10.jpg": "6f77cebae733d734ea8e231a01e5e6ad",
"assets/resources/images/4.jpg": "b876abcff6bac993b87adf3f72d57df5",
"assets/resources/images/next.png": "58aa8d153c8444e2062876b491f02c33",
"assets/resources/images/5.jpg": "e88088e75f562697553433c1c60a0da3",
"assets/resources/images/7.jpg": "c100882a374bdbaca745cc9359454625",
"assets/resources/images/6.jpg": "8efb03c1824bed423d837f71711587f8",
"assets/resources/images/2.jpg": "e1a3bf8382fa72267b6b73ffcc0cebfe",
"assets/resources/images/3.jpg": "e47d0ae4ae835d44160b9b35b6da2561",
"assets/resources/images/1.jpg": "8e9c249166c3b4d9b31a146edbc0a95e",
"assets/resources/fonts/Itim-Regular.ttf": "ea9ed37af3e95dd1629a9581ceb2c4ed",
"assets/resources/fonts/Pangolin-Regular.ttf": "7810feee2a587264c0d6058d52b60ae4",
"assets/AssetManifest.json": "27dbe9f8252584d3da984c98d2b3b46a",
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
