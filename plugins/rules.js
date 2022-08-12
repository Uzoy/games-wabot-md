let handler =  m => m.reply(`
[Indonesia]
-senin-jumat bot on 17:00 sampai 22:30 atau sampai emak gw suruh gw utk tidur dan matiin laptopnya

-sabtu-minggu kemungkinan diberikan waktu lebih lama karna saya tidak sekolah

-kalo bot kadang ngetik sendiri kemungkinan owner nya bosen dan ngechat dengan anda

-kalo ada admin yg abuse bot dan tagall/hidetag terus, tolong panggil owner jadi bisa di ban 

-nomor bot yg dulu (+1-812-****-****) itu udh tidak bisa dipakai, jadi jangan pake nomor bot yg itu karna kemungkinan udh dipake orang dan nanti dia kebingungan knp banyak orang yg spam :v

-jangan ganggu owner dengan pesan yg tidak berguna

[English]
-on monday to friday bot will be online at 17:00-22:30 (Indonesia West Time) or till my mom shout at me to turn off the laptop

-on saturday and sunday bot will be online much longer because i don't go to school on that day

-if bot suddenly just start typing and give you stupid messages, it's probably the stupid owner

-don't harass or disturb the owner.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

export default handler
