let handler = async (m, { conn }) => {
let msg = `
*πHola @${m.sender.split`@`[0]} aquΓ­ tienes los grupos oficiales de NyanCatBot-MD.*

   *_β­ββββ ββ’ 1 β’β_*
  *_βπβ https://chat.whatsapp.com/D2kkLywqKa0G3IfIm7eNf2_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 2 β’β_*
  *_βπ±β https://chat.whatsapp.com/Hckwp8I9JQv9f7o1DxzGJF_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 3 β’β_*
  *_βπβ https://chat.whatsapp.com/F3geMZt0qXX7udLzg3vbjJ_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 4 β’β_*
  *_βπ±β https://chat.whatsapp.com/GIpq7HI0Ee3ASPdjouwyh5_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 5 β’β_*
  *_βπβ https://chat.whatsapp.com/BbCzAbmOecYB1yt9VATAR1_*
*_β°βββββββββββββββββ_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler