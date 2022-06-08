import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'selera yg aneh tapi ok lu yg bos', author, json.url, [['lagi;)', `${usedPrefix}hentai`]], m)
}
handler.help = ['hentai']
handler.tags = ['NSFW']
handler.command = /^(hentai)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
