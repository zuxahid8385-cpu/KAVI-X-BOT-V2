const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "ᴘᴜᴛ ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ ʜᴇʀᴇ."
global.botname = process.env.BOTNAME || "KAVI-X MD"
global.ownernumber = process.env.OWNERNUMBER || "94702128378"
global.ownername = process.env.OWNERNAME || "Cyber Kavi"
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "Cyber Kavi"
global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "ᴘᴜᴛ ʏᴏᴜʀ ᴍᴏɴɢᴏᴅʙ ᴜʀɪ ʜᴇʀᴇ."
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"
global.kavixcap = process.env.KAVIXCAP || "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 💠 ᴋᴀᴠɪ-x ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ."
global.kavixcaption = process.env.KAVIXCAPTION || "✯ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴋᴀᴠɪ-x ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ✯"
global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})