var CACHE='veredas-v1';
var FILES=['/Calculadora-Veredas/','/Calculadora-Veredas/index.html','/Calculadora-Veredas/manifest.json','/Calculadora-Veredas/icon-192.png','/Calculadora-Veredas/icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}));});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});
