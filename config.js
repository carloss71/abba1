import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs' 
 
//á­¥ðá­¢á¢Ï´Î áÏ´Õ Îá®Ìá·á¬á¡Ï´Õ Ïá®á¬ Ïá®áá¬á¡áªÕá­¥ðá­¢
global.owner = [
  ['50763902442', 'Carlos', true],
  ['35058586566', 'Abba', true],
  ['35056655555', 'LevelUpã¡', true],
  ['35056665566', 'SinNombre', true]
]
global.mods = [] 
global.prems = [] 
//â°ââââââââââââââââââââââ¯

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

//á­¥ðá­¢âââââââð»ð°ð¬ð´ð·ð¶âââââââá­¥ðá­¢
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.aÃ±o = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//â°ââââââââââââââââââââââ¯


//á­¥ðá­¢âââââð´ð¨ð¹ðªð¨ðº ð«ð¬ ð¨ð®ð¼ð¨âââââá­¥ðá­¢
global.ignyc = '\nAbba Bot y Carlos' 
global.wm = '\nAbba Bot y Carlos\n' 
global.botname = 'Abba Bot'
global.me = 'Abba y Carlos'
//â°ââââââââââââââââââââââ¯


//á­¥ð¥á­¢âââââââð»ð¬ð¿ð»ð¶ðºâââââââá­¥ð¥á­¢
global.adimagenÂ =Â `ð|Â Iá´á´ÌÉ¢á´É´á´sÂ BÊÂ AbbaBá´á´ð¿` 
global.adanimeÂ =Â `ð¸|Â AÉ´Éªá´á´Â BÊÂ AbbaBá´á´ð´` 
global.adyoutubeÂ =Â `ð|Â Dá´sá´á´ÊÉ¢á´sÂ á´á´Â Yá´á´Tá´Êá´ð` 
global.adstickerÂ =Â `ðï¸|Â Sá´Éªá´á´á´ÊsÂ BÊÂ AbbaBá´á´ðº` 
global.addescargasÂ =Â `ð¤|Â Dá´sá´á´ÊÉ¢á´sÂ BÊÂ Abbað¸`
 //â°ââââââââââââââââââââââ¯

 
//á­¥ðá­¢âââââââðºð»ð°ðªð²ð¬ð¹ðºâââââââá­¥ðá­¢
global.packname = `ð¢ â Owner:\nð â DÃ­a:\nð â Hora:\nðï¸ â Fecha:\nð± â By:`
global.author = `â¸ Abba y Carlosð\nâ¸ ${dia}\nâ¸ ${tiempo}\nâ¸ ${fecha}\nâ¸ ${botname}`
//â°âââââââââââââââââââââ¯	
	

//á­¥ð¼á­¢âââââð´ðºð® ð«ð¬ ð¬ðºð·ð¬ð¹ð¨âââââá­¥ð¼á­¢
global.wait = '*â³AÉ¢á´á´Êá´á´ á´É´ á´á´á´á´É´á´á´... à¸^â¢ï»â¢^à¸â³*'
//â°ââââââââââââââââââââââ¯


//á­¥ðá­¢âââââââð°ð´ð¨Ìð®ð¬ðµð¬ðºâââââââá­¥ðá­¢
global.imgmenu = fs.readFileSync('./storage/image/nyanbot.jpg')
global.imgfgif = fs.readFileSync('./storage/image/fgif.jpg')
global.catalogo = fs.readFileSync('./storage/image/catalogo.png')
global.miniurl = fs.readFileSync('./storage/image/nyanmini.jpg')
global.nyanregis = fs.readFileSync('./storage/image/nyanregis.jpg')
global.imginv = fs.readFileSync('./storage/image/inventario.jpg')
global.imgshop = fs.readFileSync('./storage/image/shop.jpg')
global.menugif = fs.readFileSync('./storage/mp4/menu.mp4')
global.adnyancat = fs.readFileSync('./storage/image/adnyancat.png')
global.verificado = fs.readFileSync('./storage/image/verificado.png')
//â°ââââââââââââââââââââââ¯


//á­¥ð¿á­¢ââââââââð³ð°ðµð²ðºââââââââá­¥ð¿á­¢
global.linkgc = 'https://chat.whatsapp.com/D2kkLywqKa0G3IfIm7e'
global.nycuser = 'https://github.com/carloss71'
global.script = 'https://github.com/carloss71/abba1'
//â°ââââââââââââââââââââââ¯



//á­¥ðºá­¢ââââðºð»ð°ðªð²ð¬ð¹ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶ââââá­¥ðºá­¢
global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": catalogo, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââðªð¶ðµð»ð¨ðªð»ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââá­¥ðºá­¢
global.ownerfk = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=35058586566:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââðªð¨ð»ð¨Ìð³ð¶ð®ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââá­¥ðºá­¢
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\nâAÊÊá´Êá´á´ Y AsÊÊÊâ', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââââð®ð°ð­ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââââá­¥ðºá­¢
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*AÊÊá´Êá´á´ Y AsÊÊÊâ¥ï¸*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\n      ðAbba y Carlos`, 'jpegThumbnail': imgfgif }}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââââð¨ð¼ð«ð°ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââââá­¥ðºá­¢
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}  
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââð«ð¶ðªð¼ð´ð¬ðµð»ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââá­¥ðºá­¢
global.fdocument = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\n   ðAÊÊá´Êá´á´ Y AsÊÊÊâ`,jpegThumbnail: catalogo}}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢ââââð°ð´ð¨ð®ð¬ðµ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¨ââââá­¥ðºá­¢
global.fakeimg = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"imageMessage": { "title":`*Abba y Carlosâ¥ï¸*`, "h": `Hmm`,'seconds': '99999', 'imagePlayback': 'true', 'caption': `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\n    ðAbba y Carlosâ`, 'jpegThumbnail': catalogo }}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢ââââð´ð¬ðµðºð¨ð±ð¬ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶ââââá­¥ðºá­¢
global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":'ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\nðAbba y Carlosâ', "title": 'ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°', 'jpegThumbnail': catalogo}}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢ââð³ð¶ðªð¨ð³ð°ðð¨ðªð°ð¶Ìðµ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¨ââá­¥ðºá­¢
global.flocation = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\n   ðAbba y Carlosâ`,jpegThumbnail: catalogo}} }
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢ââââð½ð°Ìð«ð¬ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶ââââá­¥ðºá­¢
global.fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°`, "h": `Hmm`,'seconds': '2022', 'caption': `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°`, 'jpegThumbnail': catalogo}} }
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢ââââð³ð°ðµð²ð®ð· ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶ââââá­¥ðºá­¢
global.fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Alberto", "caption": `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°\n      ðAbba y Carlosâ`, 'jpegThumbnail': catalogo}} }
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââð·ð¹ð¶ð«ð¼ðªð»ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââá­¥ðºá­¢
global.fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°`, "description": "NyanCatBot-MD", "currencyCode": "USD", "priceAmount1000": "200000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢ââââð³ð°ð½ð¬ ð³ð¶ðªð¨ð³ð°ðð¨ðªð°ð¶Ìðµââââá­¥ðºá­¢
global.liveloc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°","h": `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°`, 'jpegThumbnail': catalogo}}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââð·ð¹ð¶ð«ð¼ðªð»ð¶ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶ 2âââá­¥ðºá­¢
global.fproducto2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°`, "retailerId": "ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââð½ð°ð¬ð¾ð¶ðµðªð¬ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶âââá­¥ðºá­¢
global.fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { imageMessage: { mimetype: 'image/jpeg', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//â°ââââââââââââââââââââââ¯
//á­¥ðºá­¢âââð½ð°ð¬ð¾ð¶ðµðªð¬ ð½ð¬ð¹ð°ð­ð°ðªð¨ð«ð¶ #2âââá­¥ðºá­¢
global.fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//â°ââââââââââââââââââââââ¯

//á­¥ðá­¢ââââââð¨ð« ð«ð¬ ð®ð¹ð¼ð·ð¶ââââââá­¥ðá­¢
global.adgp = { contextInfo: { externalAdReply: { showAdAttribution: true, title: 'ð±â¸½âAbbaBá´á´ - MDðâ¨áââ°', body: global.botname, sourceUrl: global.linkgc, thumbnail: miniurl }}}
//â°ââââââââââââââââââââââ¯

//á­¥ðá­¢âââââð¨ð« ð«ð¬ ð°ðµðºð»ð¨ð®ð¹ð¨ð´âââââá­¥ðá­¢
global.adig = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: "https://Instagram.com/rlxfly.uw", mediaType: "VIDEO", description: "https://Instagram.com/rlxfly.uw",  title: 'Test', body: `hola`, thumbnail: miniurl, sourceUrl: 'http://s.id/0x404' }}}

//á­¥ðá­¢âââââð¨ð« ð«ð¬ ðð¶ð¼ð»ð¼ð©ð¬âââââá­¥ðá­¢
global.adyt = { contextInfo: { externalAdReply: { showAdAttribution: true, title: botname, mediaType: 2, previewType: "VIDEO", thumbnail: imgmenu, mediaUrl: 'https://youtu.be/FKVuVneuwtg', sourceUrl: linkgc }}} 

//á­¥ð¾á­¢âââââââð²ð¬ððº ð¨ð·ð°ðºâââââââá­¥ð¾á­¢
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
//â°ââââââââââââââââââââââ¯

//á­¥âá­¢ââââââð»ð°ð¬ð´ð·ð¶ ð¹ð·ð®ââââââá­¥âá­¢
global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
};
//â°ââââââââââââââââââââââ¯

//á­¥âá­¢ââââââð»ð°ð¬ð´ð·ð¶ ð¹ð·ð®ââââââá­¥âá­¢
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche ð'; break; case 1: hour = 'una linda noche ð¤'; break; case 2: hour = 'una linda noche ð¦'; break; case 3: hour = 'una linda maÃ±ana â¨'; break; case 4: hour = 'una linda maÃ±ana ð«'; break; case 5: hour = 'una linda maÃ±ana ð'; break; case 6: hour = 'una linda maÃ±ana ð'; break; case 7: hour = 'una linda maÃ±ana ð'; break; case 8: hour = 'una linda maÃ±ana ð«'; break; case 9: hour = 'una linda maÃ±ana â¨'; break; case 10: hour = 'un lindo dia ð'; break; case 11: hour = 'un lindo dia ð¨'; break; case 12: hour = 'un lindo dia â'; break; case 13: hour = 'un lindo dia ð¤'; break; case 14: hour = 'una linda tarde ð'; break; case 15: hour = 'una linda tarde ð¥'; break; case 16: hour = 'una linda tarde ð¹'; break; case 17: hour = 'una linda tarde ð'; break; case 18: hour = 'una linda noche ð'; break; case 19: hour = 'una linda noche ð'; break; case 20: hour = 'una linda noche ð'; break; case 21: hour = 'una linda noche ð'; break; case 22: hour = 'una linda noche ð'; break; case 23: hour = 'una linda noche ð'; break;}
  global.saludo = "Espero que tengas " + hour;
//â°ââââââââââââââââââââââ¯

global.multiplier = 9999 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ð',
      limit: 'ð',
      exp: 'ð¹ï¸'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
