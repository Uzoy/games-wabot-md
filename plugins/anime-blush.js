import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/blush')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, '>///<', author, json.url, [['next', `${usedPrefix}blush`]], m)
}
handler.help = ['blush']
handler.tags = ['Anime']
handler.command = /^(blush)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
