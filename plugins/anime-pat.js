import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/pat')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'pat pat', author, json.url, [['next', `${usedPrefix}pat`]], m)
}
handler.help = ['pat']
handler.tags = ['Anime']
handler.command = /^(pat)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
