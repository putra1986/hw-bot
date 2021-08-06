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

const starts = async (hexa = new WAConnection()) => {
    hexa.logger.level = 'warn'
    console.log(banner.string)
    hexa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
    hexa.on('connecting', () => {
        start('2', 'Connecting...')
    })
    hexa.on('open', () => {
        success('2', 'Connected')
    })
    await hexa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(hexa.base64EncodedAuthInfo(), null, '\t'))
    
hexa.on('group-participants-update', async (anu) => {
	try {
		const mdata = await hexa.groupMetadata(anu.jid)
                const behys = mdata.participants.length
		console.log(anu)
		if (anu.action == 'add') {
                if (gcrevoke.includes(anu.jid)) {
                hexa.revokeInvite(anu.jid)
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
pushnem = hexa.contacts[num] != undefined ? hexa.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : hexa.contacts[num].notify || hexa.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/image/pp.jpeg'
			}
				exec(`magick './media/image/wel.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jm} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER + ${behys}' -pointsize 63 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
				.on('error', () => hexa.sendMessage(m.chat, 'error', MessageType.text))
				.on('exit', () => {
			hexa.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Hay!!,Jangan Lupa Baca Deskripsi Dan Patuhi Peraturan Grup* @${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
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
pushnem = hexa.contacts[num] != undefined ? hexa.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : hexa.contacts[num].notify || hexa.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/image/pp.jpeg'
			}
				exec(`magick './media/image/lev.jpg' -gravity west -fill '#ffffff' -font './media/font/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 '${resa}' -pointsize 51 -annotate +460+83 '${jamny} ${calender}' -pointsize 48 -annotate +100+230 'MEMBER - ${behys}' -pointsize 63 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite 'hasil.jpg'`)
				.on('error', () => hexa.sendMessage(m.chat, 'error', MessageType.text))
				.on('exit', () => {
			hexa.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Sayonara👋🏻*@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
hexa.on('chat-update', async (message) => {
        require('./index.js')(hexa, message)
})
antidel = true
hexa.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
const type = Object.keys(m.message)[0]
hexa.sendMessage(m.key.remoteJid, `\`\`\`「 Anti Delete 」\`\`\`
•> Nama : @${m.participant.split("@")[0]}
•> Waktu : ${jam} ${week} ${calender}
•> Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

hexa.copyNForward(m.key.remoteJid, m.message)
})
antical = true
hexa.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
hexa.sendMessage(call, `*Sorry ${hexa.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => hexa.blockUser(call, "add"))
})
isBattre = 'Not Detect' // Battre Belum Kedetect ( MyMans APIs )
isCharge = 'Not Detect' // Charging Belum Kedetect ( MyMans APIs )
hexa.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
hexa.on('CB:Blocklist', json => {
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
