const axios = require('axios');
const jssoup = require('jssoup').default;

const pushbullet_api_key = "" //telefona bildirim göndermek için Pushbullet hesabının API anahtarı
const w3a = "" //e-devlet w3a çerezi

const url = 'https://www.turkiye.gov.tr/ptt-ptt-uzerinden-yapilan-kurum-odemeleri-sorgulama'
