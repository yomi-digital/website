// define a prefix for your cache names. It is recommended to use your project name
workbox.core.setCacheNameDetails({ prefix: "yomi" });

// Start of Precaching##########################
// __precacheManifest is the list of resources you want to precache. This list will be generated and imported automatically by workbox during build time
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// cache image and render from the cache if it exists or go t the network
workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.StaleWhileRevalidate()
);

// workbox.routing.registerRoute(
//   ({ url }) => url.pathname.startsWith("https://dog.ceo/api/"),
//   new workbox.strategies.StaleWhileRevalidate()
// );
