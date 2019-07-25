module.exports = {
    "globDirectory": "dist-dev",
    "globPatterns": [
        "index.html",
        "favicon.ico",
        "*.js",
        "*.css",
        "assets/**/*.png",
        "assets/**/*.svg",
        "manifest.json"
    ],
    "dontCacheBustURLsMatching": new RegExp('.+\.[a-f0-9]{20}\..+'),
    "maximumFileSizeToCacheInBytes": 5000000,
    "swSrc": "src/service-worker.js",
    "swDest": "dist-dev/service-worker.js"
};