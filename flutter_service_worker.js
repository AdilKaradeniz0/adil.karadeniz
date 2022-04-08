'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a8ada84f0ce5de91b80dca1b8349ef28",
"assets/assets/images/%25C5%259Eok_Logo.png": "5ba8bbafa6e983659f7356d1d5e73e32",
"assets/assets/images/1.jpg": "2ef7a4e630a65c86f20bff8a4cedf926",
"assets/assets/images/2.jpg": "ef958b5d44fc75f053a02294d819302d",
"assets/assets/images/3.jpg": "22451e3c54e592c75434a6f2dd57d01f",
"assets/assets/images/4.jpg": "9b04f5da2fe9f74c43d247feb6b876af",
"assets/assets/images/5.jpg": "21fa3412b6533bb83b4b773f8ba80869",
"assets/assets/images/6.jpg": "1e46c7275e904ef611fd915ac3f41d8f",
"assets/assets/images/7.jpg": "47083703857e81cd8dcc4fefb6cf0f71",
"assets/assets/images/8.jpg": "757491f703ffe5100a52d68e0a74799c",
"assets/assets/images/9.jpg": "79721703467f912721c2a645c4f1a583",
"assets/assets/images/A101.1.jpg": "490220130d53aa042823439bf8aea839",
"assets/assets/images/A101.2.jpg": "1913523165311294736b372b61f38ab5",
"assets/assets/images/A101.3.jpg": "bedf27ef0df7248a198d446b82d1c092",
"assets/assets/images/A101.4.jpg": "d845aad8a8077c716935be6edf0bccc5",
"assets/assets/images/A101.5.jpg": "7407c61277d5b04cd5712c5b9f9c6e32",
"assets/assets/images/A101.6.jpg": "1913523165311294736b372b61f38ab5",
"assets/assets/images/A101.7.jpg": "d845aad8a8077c716935be6edf0bccc5",
"assets/assets/images/A101.8.jpg": "bedf27ef0df7248a198d446b82d1c092",
"assets/assets/images/A101.9.jpg": "7407c61277d5b04cd5712c5b9f9c6e32",
"assets/assets/images/A101.jpg": "259d42193f5b4fa77c076497c0f985f0",
"assets/assets/images/A101.png": "f2deb32dc6cd0bcc8eb417f97e4b2540",
"assets/assets/images/Ayarlar.png": "4cf9126f74ae73cc72cd7b2ec3794572",
"assets/assets/images/bim.png": "6c2547bcd1714c6451192f5b771f52d3",
"assets/assets/images/Bizim.png": "ccfd4baf5a01953716901fde7436d547",
"assets/assets/images/M1.jpg": "31423398b7be294199178e0cdc07bf5e",
"assets/assets/images/M2.jpg": "16e60ad15814489a1b2866c9170603fa",
"assets/assets/images/M3.jpg": "3472c00e6b9430619c2e572d40706ea7",
"assets/assets/images/M4.jpg": "e106a9f869f544845ebfabbe334b94bc",
"assets/assets/images/M5.jpg": "7cf1b05cc8fa29a67cf102827f9dbe5f",
"assets/assets/images/M6.jpg": "e75378bd0d5d7558a642e9b3f55ad21b",
"assets/assets/images/M7.jpg": "8228077cf356a3a6f9d4ef2be84256b6",
"assets/assets/images/M8.jpg": "da32765dab35bcf2e568b64c5c9dac09",
"assets/assets/images/M9.jpg": "404c63e0f070f893d9ad08948145a5d0",
"assets/assets/images/Market.png": "36f40fdee69f9ad79a99c1fd13d5d1f8",
"assets/assets/images/Migros.png": "e3b733362b4b291e93fccfd378a0c67d",
"assets/assets/images/Migros2.png": "86c4b2bc99f04c577f808393b9f502d3",
"assets/assets/images/televizyon.png": "6c6108701fe3b62cf2d87511b88eefce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3d708a12cac64f193f4e55979c2a790",
"/": "e3d708a12cac64f193f4e55979c2a790",
"main.dart.js": "de230167015f89321ac3878f9427648f",
"manifest.json": "c762e892eda68cc33bc9310967994e98",
"version.json": "0c72343e7f3986c14034706b11b1aa71"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
