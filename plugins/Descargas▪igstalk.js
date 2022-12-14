import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `ā ļø *Escriba un Nombre de Usuario.*\n\nš *_Ejemplo :_* ${usedPrefix + command} carlos_acosta.1`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    await conn.reply(m.chat, global.wait, m)
    m.reply(`
āāāć *STALKING* ć
āā *š Nombre Completo* : *_${name}_*
āā *š Username* : _${username}_
āā *š„ Seguidores* : _${followersH}_
āā *š« Siguiendo* : _${followingH}_
āā *š Bio :* _${description}_
ā
āā *š Link* : *_https://instagram.com/${username.replace(/^@/, '')}_*
āāāāāāā¬£
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' *<username>*')
handler.tags = ['downloader']

handler.command = ['igstalk'] 
handler.register = true

handler.register = true
export default handler
