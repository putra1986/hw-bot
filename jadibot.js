const { MessageType } = require('@adiwajshing/baileys')
const { WAConnection } = require('@adiwajshing/baileys')
const qrcodes = require('qrcode');
const fs = require('fs')
const conn = new WAConnection()
conn.version = [2, 2119, 6]
const base64ToImage = require('base64-to-image');
exports.jadibot = async function(hexa,from,sender,reply,mek) {  
conn.on('qr' ,async qr => {
  url = await qrcodes.toDataURL(qr)
  auth = true
        //console.log(url)
        buff = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
        await fs.writeFileSync('./jadibot.jpg', buff)
    let scen = await hexa.sendMessage(from, fs.readFileSync('./jadibot.jpg'), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})
    
  setTimeout(() => {
       hexa.deleteMessage(from, scen.key)
  }, 30000);
  })
  
conn.on ('open',() => {
  console.log ('credentials update')
  const authInfo = conn.base64EncodedAuthInfo()
  fs.writeFileSync(`./database/jadibot/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
})
    conn.on('chat-update', async (chat) => {
        require('./index.js')(conn, chat)
    })
    
    await conn.connect().then(async ({user}) => {
      reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
    })
    }
exports.stopjadibot = async function(hexa, from, sender){
  hexa.sendMessage(from,'Kamu tidak terdaftar di ListBot!',MessageType.text)
  await fs.unlinkSync(`./database/jadibot/${sender}.json`)
  conn.close()
}
