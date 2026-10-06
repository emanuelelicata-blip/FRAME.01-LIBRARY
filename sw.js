const V='f01-muw2l4qd';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(['./','assets/frame-os.css','assets/icons/icon-192.png'])).catch(()=>{}))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  const stat=/\/(p|assets)\//.test(r.url);
  e.respondWith(stat?caches.match(r).then(h=>h||fetch(r).then(n=>{const cp=n.clone();caches.open(V).then(c=>c.put(r,cp));return n})):fetch(r).then(n=>{const cp=n.clone();caches.open(V).then(c=>c.put(r,cp));return n}).catch(()=>caches.match(r)))});
