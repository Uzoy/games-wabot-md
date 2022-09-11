import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/megumin')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Explosion!', author, json.url, [['next', `${usedPrefix}megumin`]], m)
}
handler.help = ['megumin']
handler.tags = ['Anime']
handler.command = /^(megumin)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
