importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

if (workbox){
    workbox.precaching.precacheAndRoute([

    { url:'/', revision: '1' },
    { url:'/index.html', revision: '1' },
    { url:'/manifest.json', revision: '1' },
    { url:'/push.js', revision: '1' },
    { url:'/sw.js', revision: '1' },
    { url:'/css/icons.css', revision: '1' },
    { url:'/css/materialize.css', revision: '1' },
    { url:'/css/style.css', revision: '1' },
    { url:'/font/MaterialIcons-Regular.ttf', revision: '1' },
    { url:'/pages/fav-team.html', revision: '1' },
    { url:'/pages/home.html', revision: '1' },
    { url:'/pages/match.html', revision: '1' },
    { url:'/pages/team.html', revision: '1' },
    { url:'/pages/nav.html', revision: '1' },
    { url:'/js/api.js', revision: '1' },
    { url:'/js/db.js', revision: '1' },
    { url:'/js/functions.js', revision: '1' },
    { url:'/js/idb.js', revision: '1' },
    { url:'/js/init.js', revision: '1' },
    { url:'/js/materialize.js', revision: '1' },
    { url:'/js/script.js', revision: '1' },
    { url:'/img/android-72x72.png', revision: '1' },
    { url:'/img/apple-touch-icon-180x180.png', revision: '1' },
    { url:'/img/pwa-192x192.png', revision: '1' },
    { url:'/img/pwa-512x512.png', revision: '1' }

])

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)


workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ]
    })
  )

    console.log('Workbox berhasil dimuat')
}
else {
    console.log('Workbox gagal dimuat')
}

// * push notification
self.addEventListener('push', event => {
    console.log(event);
    let body;
    if (event.data) {
        body = event.data.text()
    }else{
        body = "push message no payload"
    }

    let opt ={
        body,
        icon : './img/pwa-512x512.png',
        vibrate : [100,50,100],
        data : {
            dateOfArrival : Date.now(),
            primaryKey : 1
        }
    }

    event.waitUntil(
        self.registration.showNotification('Push notification',opt)
    )
})