import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/shinobu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, '598 taun dia:v', author, json.url, [['next', `${usedPrefix}shinobu`]], m)
}
handler.help = ['shinobu']
handler.tags = ['Anime']
handler.command = /^(shinobu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
