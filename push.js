const webPush = require("web-push");

const vapidKeys = {
    publicKey : "BPU0MRtoZXyRRtlGoz8vJytyi9Pzg6xxiNuDZkWJPHiBIwPraDWLqCQMB_xeYaSgmalikwQ69aQT4OeMB81msPE",
    privateKey : "iAiMIWsY3w8qPVpO-2Q-jwAkcvlm0ByBlP7UgmjaUL4"
}
const subscription = {
    endpoint : "https://fcm.googleapis.com/fcm/send/ef3j6HQjTgg:APA91bEsZM9KiAUkQq6yX5ggG3ZFhFrtSjNytE7_w4BqC8kWQ9Dy_RM4n0i2L4VyxhWhpGxIofaQQODDpPFF-8F7IHXO0YiIOGF-Luegl_flZ1ilYBB0DQgmr1eXMMFxvtAkj4wgm1OF",
    keys : {
        p256dh : "BKpfdiimP0+FJZjybnEXPxa2rNb23vznUMIMRgXSp40+cHafLPMSCMkKD0ncwmgCan3IA/uscX1AqW8/LTQgWXY=",
        auth : "kzAt+eBH3dGBdxKoXWBzgw=="
    }
}
const options = {
    gcmAPIKey : "182086659604",
    TTL : 60
}
webPush.setVapidDetails('mailto:farhanmfp@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let payloads = "Selamat! push notification + subscription berhasil digunakan."

webPush.sendNotification(
    subscription,
    payloads,
    options
)