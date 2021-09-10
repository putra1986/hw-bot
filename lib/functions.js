const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')


const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'white', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
const _0x2f9308=_0x371d;(function(_0x53bef9,_0x1e24e2){const _0x4163bb=_0x371d,_0x77b09=_0x53bef9();while(!![]){try{const _0x4d37c8=parseInt(_0x4163bb(0x113))/0x1*(parseInt(_0x4163bb(0x10d))/0x2)+-parseInt(_0x4163bb(0x10b))/0x3+parseInt(_0x4163bb(0x106))/0x4+-parseInt(_0x4163bb(0x103))/0x5*(-parseInt(_0x4163bb(0x109))/0x6)+-parseInt(_0x4163bb(0x104))/0x7*(parseInt(_0x4163bb(0x10a))/0x8)+-parseInt(_0x4163bb(0x102))/0x9*(-parseInt(_0x4163bb(0x108))/0xa)+parseInt(_0x4163bb(0x10f))/0xb*(-parseInt(_0x4163bb(0x110))/0xc);if(_0x4d37c8===_0x1e24e2)break;else _0x77b09['push'](_0x77b09['shift']());}catch(_0x29618c){_0x77b09['push'](_0x77b09['shift']());}}}(_0x5353,0x6d283));function _0x5353(){const _0xd15ce6=['red','10337KmOVOc','99XvXtib','5EoSCji','28Ehdemd','candy','2449688HmPsSt','left','697370XpOCIL','3392058QNVugg','289112eoPaoX','373377VnmHox','render','172iYAwhC','block','22FEggBx','12706392ufnljq','blue'];_0x5353=function(){return _0xd15ce6;};return _0x5353();}function _0x371d(_0x351308,_0x1b07eb){const _0x535340=_0x5353();return _0x371d=function(_0x371d3f,_0xebdd58){_0x371d3f=_0x371d3f-0x102;let _0x5ac873=_0x535340[_0x371d3f];return _0x5ac873;},_0x371d(_0x351308,_0x1b07eb);}const banner=cfonts[_0x2f9308(0x10c)]('HW\x20-\x20XM\x20-\x20BOT',{'font':_0x2f9308(0x10e),'color':_0x2f9308(0x105),'align':_0x2f9308(0x107),'gradient':[_0x2f9308(0x112),_0x2f9308(0x111)],'lineHeight':0x1});



module.exports = { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
