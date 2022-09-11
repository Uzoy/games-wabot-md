import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/bonk')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'bonk', author, json.url, [['next', `${usedPrefix}bonk`]], m)
}
handler.help = ['bonk']
handler.tags = ['Anime']
handler.command = /^(bonk)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
