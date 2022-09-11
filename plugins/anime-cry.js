import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/cry')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'D:', author, json.url, [['next', `${usedPrefix}cry`]], m)
}
handler.help = ['cry']
handler.tags = ['Anime']
handler.command = /^(cry)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
