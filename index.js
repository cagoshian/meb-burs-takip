const axios = require('axios');
const jssoup = require('jssoup').default;

const pushbullet_api_key = "" //telefona bildirim göndermek için Pushbullet hesabının API anahtarı
const w3a = "" //e-devlet w3a çerezi

const url = 'https://www.turkiye.gov.tr/ptt-ptt-uzerinden-yapilan-kurum-odemeleri-sorgulama'

const config = {
	headers: {
		'Cookie': {
			'language': 'tr_TR.UTF-8',
			'w3a': w3a
		},
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
		'Accept-Language': 'tr,en-US;q=0.7,en;q=0.3',
		'Accept-Encoding': 'gzip, deflate, br, zstd',
	}
}

function bildirimGonder() {
    const pushbulletConfig = {
        headers: {
            'Access-Token': pushbullet_api_key,
            'Content-Type': 'application/json'
        }
    }
    const pushbulletData  = {
        "title":"Burs yatmış!",
        "type":"note"
    }
    axios.post("https://api.pushbullet.com/v2/pushes", pushbulletData, pushbulletConfig).then(() => {
        console.log("Bildirim gönderildi")
    }).catch(error => {
        console.log("bildirim error: ", error)
    })
}

config.headers.Cookie = Object.entries(config.headers.Cookie).map(([k, v]) => `${k}=${v}`).join('; ');

let interval;

function kontrolEt() {
	axios.get(url, config).then(res => {
		const soup = new jssoup(res.data);
		let tag = soup.find('table')
		let kimlikError = !soup.findAll().some(p => p.attrs.class == "logout")
		if (kimlikError) {
			console.log("Kimlik Doğrulama Hatası!")
		} else {
			if (tag) {
				console.log("Burs yatmış!")
				if (pushbullet_api_key != "") bildirimGonder()
				clearInterval(interval)
			} else {
				console.log("Burs yatmamış!")
			}
		}
	})
}

console.log('-MEB Bursu Takip Sistemi-')
kontrolEt()
interval = setInterval(kontrolEt, 60000)
