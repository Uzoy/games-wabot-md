let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [082284519515]
│ • Telkomsel [083189131519]
╰────

╭─「 Masukin bot ke grup 」
│ • 3k/bulan
│ • 10k/6bulan
│ • (ketik .owner utk info lebih lengkap)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
