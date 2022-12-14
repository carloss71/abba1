let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `β οΈ *_No hay votaciones en este grupo!_*`, wm, null, [
    ['ππΎππ°ππ³οΈ', `${usedPrefix}votar`],
    ['πΌπ΄π½πΜπ₯', `${usedPrefix}menu`]
], m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) {
    await conn.sendMessage(m.chat, { react: { text: 'β', key: m.key }})
    conn.reply(m.chat, `β *Ya has votado!*`, m)
    throw false
    }
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    try {
    let [reason, upvote, devote] = conn.vote[id]
    
let caption = `
\t\t\t\t*β²βπ³οΈ VOTACIONES π³οΈββ²*

γ π£ γRazΓ³n:* ${reason}

\t\t\t*γ β γVOTOS A FAVORγ β γ*
*Total: ${upvote.length}*
${upvote.map((v, i) => `β’ ${i + 1}.  @${v.split`@`[0]}`).join('\n')}

\t\t*γ β γVOTOS EN CONTRAγ β γ*
*Total:* ${devote.length}
${devote.map((v, i) => `β’ ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
`
conn.sendButton(m.chat, caption, wm, false, [['π΅π°ππΎπβ', `/${command}`], ['π²πΎπ½πππ°β', `/${command}`]], fakemsg, { mentions: conn.parseMention(caption) })
} catch {
    m.reply('β οΈ *_No hay votaciones activas en este grupo._*')
  }
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

export default handler
