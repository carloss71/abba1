let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
/*var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: `https://github.com/ALBERTO9883` },
'mimetype': `application/${document}`,
'fileName': `π±βΈ½βNΚα΄Ι΄Cα΄α΄Bα΄α΄ - MDπβ¨αββ°`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/ALBERTO9883',
'mediaType': 2,
'previewType': 'pdf',
'title': botname,
'body': `βAΚΚα΄Κα΄α΄ Y AsΚΚΚβ`,
'thumbnail': global.imgmenu,
'sourceUrl': 'https://wa.me/50499698072' }},
'mentions': [m.sender],
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'Ownerπ’'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Δ«.am/βͺοΈππ₯πππ«π­π¨π/α¦α΄;;;\nFN:Δ«.am/βͺοΈππ₯πππ«π­π¨π/α¦α΄\nORG:Δ«.am/βͺοΈππ₯πππ«π­π¨π/α¦α΄\nTITLE:\nitem1.TEL;waid=50499698072:+50499698072\nitem1.X-ABLabel:Δ«.am/βͺοΈππ₯πππ«π­π¨π/α¦α΄\nX-WA-BIZ-DESCRIPTION:π±Creador oficial de NyanCatBot.\nX-WA-BIZ-NAME:Δ«.am/βͺοΈππ₯πππ«π­π¨π/α¦α΄\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Δ«.am/βͺοΈππ₯πππ«π­π¨π/α¦α΄', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['info']
handler.help = ['script']
handler.customPrefix = /^(@50499698072)$/i
handler.command = new RegExp
export default handler
