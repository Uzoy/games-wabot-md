import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/handhold')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, ':3', author, json.url, [['next', `${usedPrefix}handhold`]], m)
}
handler.help = ['handhold']
handler.tags = ['Anime']
handler.command = /^(handhold)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
