const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const { exec } = require('child_process')
const moment = require('moment-timezone')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const gcrevoke = ["6285714170944-1621430788@g.us"]
blocked = []

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (Haikal = new WAConnection()) => {
    Haikal.logger.level = 'warn'
    console.log(banner.string)
    Haikal.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && Haikal.loadAuthInfo('./session.json')
    Haikal.on('connecting', () => {
        start('2', 'Connecting...')
    })
    Haikal.on('open', () => {
        success('2', 'Connected')
    })
    await Haikal.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Haikal.base64EncodedAuthInfo(), null, '\t'))
    
Haikal.on('group-participants-update', async (anu) => {
	try {
		const mdata = await Haikal.groupMetadata(anu.jid)
                const behys = mdata.participants.length
		console.log(anu)
		if (anu.action == 'add') {
                if (gcrevoke.includes(anu.jid)) {
                Haikal.revokeInvite(anu.jid)
                }
			num = anu.participants[0]
			hesa = `${num}`
		  mestes = (teks) => {
					return teks.replace(/['@s whatsapp.net']/g, " ");
					}
			resa = `${mestes(hesa)}`
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = Haikal.contacts[num] != undefined ? Haikal.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : Haikal.contacts[num].notify || Haikal.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await Haikal.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/image/pp.jpeg'
			}
				exec(`magick './media/image/wel.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jm} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER + ${behys}' -pointsize 63 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
				.on('error', () => Haikal.sendMessage(m.chat, 'error', MessageType.text))
				.on('exit', () => {
			Haikal.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*MY NAME HW MODS BOT*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
SELAMAT DATANG
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN_GABUNG :
┗━━⊱
┏━━⊱
┣❏JANGAN_LUPA_SUBSCRIBE : https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Baca_Deskripsi_Dan_Patuhi_Peraturan_Grup @${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
			})
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		hesa = `${num}`
		  mestes = (teks) => {
					return teks.replace(/['@s whatsapp.net']/g, " ");
					}
			resa = `${mestes(hesa)}`
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Janua@ri 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = Haikal.contacts[num] != undefined ? Haikal.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : Haikal.contacts[num].notify || Haikal.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await Haikal.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/image/pp.jpeg'
			}
				exec(`magick './media/image/lev.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jamny} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER - ${behys}' -pointsize 63 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
				.on('error', () => Haikal.sendMessage(m.chat, 'error', MessageType.text))
				.on('exit', () => {
			Haikal.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*MY NAME HW MODS BOT*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ BABAY BEBAN GROUP
┗━━⊱
SEMOGA TENANG DI ALAM SANA 👋🏻
┏━━⊱
┣❏SUBSCRIBE : https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Sayonara👋🏻*@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
Haikal.on('chat-update', async (message) => {
        require('./index.js')(Haikal, message)
})
function _0x1ba3(_0x4fb62f,_0x4d2108){const _0x2af4fd=_0x2af4();return _0x1ba3=function(_0x1ba3b2,_0x444abe){_0x1ba3b2=_0x1ba3b2-0xf1;let _0x4cbf27=_0x2af4fd[_0x1ba3b2];return _0x4cbf27;},_0x1ba3(_0x4fb62f,_0x4d2108);}const _0x453701=_0x1ba3;(function(_0x825879,_0x5aa888){const _0x222471=_0x1ba3,_0x182c15=_0x825879();while(!![]){try{const _0x1d0fbb=-parseInt(_0x222471(0xfa))/0x1*(-parseInt(_0x222471(0xf9))/0x2)+parseInt(_0x222471(0xfc))/0x3*(parseInt(_0x222471(0xf8))/0x4)+-parseInt(_0x222471(0x112))/0x5+parseInt(_0x222471(0xfe))/0x6*(parseInt(_0x222471(0x109))/0x7)+-parseInt(_0x222471(0x101))/0x8+parseInt(_0x222471(0x10c))/0x9*(parseInt(_0x222471(0xf2))/0xa)+-parseInt(_0x222471(0x100))/0xb;if(_0x1d0fbb===_0x5aa888)break;else _0x182c15['push'](_0x182c15['shift']());}catch(_0x52c21a){_0x182c15['push'](_0x182c15['shift']());}}}(_0x2af4,0x5f55d),antidel=!![],Haikal['on'](_0x453701(0x10e),async _0x226077=>{const _0x4a5c45=_0x453701;if(_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)]=='status@broadcast')return;if(!_0x226077['key'][_0x4a5c45(0xf4)]&&_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0xf4)])return;if(antidel===![])return;_0x226077[_0x4a5c45(0x105)]=Object[_0x4a5c45(0x104)](_0x226077[_0x4a5c45(0x105)])[0x0]===_0x4a5c45(0x113)?_0x226077[_0x4a5c45(0x105)][_0x4a5c45(0x113)][_0x4a5c45(0x105)]:_0x226077['message'];const _0x4887c5=moment['tz']('Asia/Jakarta')[_0x4a5c45(0xf5)](_0x4a5c45(0xfd));let _0x1edd6e=new Date(),_0x477062='id',_0x2c7d41=new Date(0x0)['getTime']()-new Date(_0x4a5c45(0x103))['getTime'](),_0x1d5e49=[_0x4a5c45(0x10f),'Pon',_0x4a5c45(0xf1),_0x4a5c45(0x102),'Legi'][Math[_0x4a5c45(0x10a)]((_0x1edd6e*0x1+_0x2c7d41)/0x50ae4c0)%0x5],_0x4145b9=_0x1edd6e[_0x4a5c45(0x108)](_0x477062,{'weekday':_0x4a5c45(0x111)}),_0x573d18=_0x1edd6e[_0x4a5c45(0x108)](_0x477062,{'day':'numeric','month':'long','year':_0x4a5c45(0x10b)});const _0x591b7f=Object[_0x4a5c45(0x104)](_0x226077[_0x4a5c45(0x105)])[0x0];Haikal[_0x4a5c45(0xfb)](_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)],'```「\x20Anti\x20Delete\x20」```\x0a\x0a•>\x20Nama\x20:\x20@'+_0x226077[_0x4a5c45(0xf3)][_0x4a5c45(0x107)]('@')[0x0]+_0x4a5c45(0x10d)+_0x4887c5+'\x20'+_0x4145b9+'\x20'+_0x573d18+_0x4a5c45(0x110)+_0x591b7f,MessageType[_0x4a5c45(0xf6)],{'quoted':_0x226077['message'],'contextInfo':{'mentionedJid':[_0x226077[_0x4a5c45(0xf3)]]}}),Haikal[_0x4a5c45(0xf7)](_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)],_0x226077['message']);}));function _0x2af4(){const _0x1fc9e8=['long','1127395keeVrJ','ephemeralMessage','Wage','260sQdecY','participant','fromMe','format','text','copyNForward','8kcczFD','1202PJlOil','233ANozOW','sendMessage','715893kSfVVT','HH:mm:ss','50604dwvaow','key','676786uqfgAF','1616072oEyrjG','Kliwon','1\x20Januari\x202021','keys','message','remoteJid','split','toLocaleDateString','147DlDbVJ','floor','numeric','29457IcsbaD','\x0a\x0a•>\x20Waktu\x20:\x20','message-delete','Pahing','\x0a\x0a•>\x20Type\x20:\x20'];_0x2af4=function(){return _0x1fc9e8;};return _0x2af4();}
antical = true
Haikal.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Haikal.sendMessage(call, `*Sorry ${Haikal.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => Haikal.blockUser(call, "add"))
})
isBattre = 'Not Detect' // Battre Belum Kedetect ( MyMans APIs )
isCharge = 'Not Detect' // Charging Belum Kedetect ( MyMans APIs )
Haikal.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
Haikal.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
