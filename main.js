const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const { spawn, exec, execSync } = require("child_process")
const moment = require('moment-timezone')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const gcrevoke = ["6285714170944-1621430788@g.us"]

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
				ppimg = './media/pp.jpeg'
			}
				exec(`magick './media/wel.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jm} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER + ${behys}' -pointsize 63 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
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
				ppimg = './media/pp.jpeg'
			}
				exec(`magick './media/lev.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jamny} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER - ${behys}' -pointsize 63 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
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
