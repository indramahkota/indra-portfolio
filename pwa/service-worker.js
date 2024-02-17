/* eslint-disable no-undef */
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { clientsClaim, skipWaiting } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

/* Image: CacheFirst */
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Tahun
      }),
    ],
  })
);

/* Font: CacheFirst */
registerRoute(
  ({ request }) => request.destination === "font",
  new CacheFirst({
    cacheName: "fonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Tahun
      }),
    ],
  })
);

/* Script: CacheFirst */
registerRoute(
  ({ request }) => request.destination === "script",
  new CacheFirst({
    cacheName: "scripts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Tahun
      }),
    ],
  })
);

/* Style: CacheFirst */
registerRoute(
  ({ request }) => request.destination === "style",
  new CacheFirst({
    cacheName: "styles",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Tahun
      }),
    ],
  })
);

const base_font_url = "https://fonts.gstatic.com/";
const base_icon_url = "https://cdn.jsdelivr.net/";

/* Font: CacheFirst */
registerRoute(
  ({ request }) =>
    request.url.indexOf(base_font_url) > -1 ||
    request.url.indexOf(base_icon_url) > -1,
  new CacheFirst({
    cacheName: "fonts&icons",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Tahun
      }),
    ],
  })
);

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST, { ignoreUrlParametersMatching: [/.*/] });
