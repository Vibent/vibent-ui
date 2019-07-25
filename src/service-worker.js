importScripts('workbox-output/workbox-sw.js');
workbox.setConfig({
    debug: false,
    modulePathPrefix: 'workbox-output/'
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([]);
