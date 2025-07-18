const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "ᴘᴜᴛ ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ ʜᴇʀᴇ."
global.mongoDB = process.env.MONGODB_URI || "ᴘᴜᴛ ʏᴏᴜʀ ᴍᴏɴɢᴏᴅʙ ᴜʀɪ ʜᴇʀᴇ."
global.botname = process.env.BOTNAME || "KAVI-X MD"
global.ownernumber = process.env.OWNERNUMBER || "94702128378"
global.ownername = process.env.OWNERNAME || "Cyber Kavi"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "Cyber Kavi"
global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"
global.kavixcap = process.env.KAVIXCAP || "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 💠 ᴋᴀᴠɪ-x ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ."
global.kavixcaption = process.env.KAVIXCAPTION || "✯ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴋᴀᴠɪ-x ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ✯"
global.kavixcap2 = process.env.KAVIXCAP2 || `ᴘᴏᴡᴇʀᴇᴅ ʙʏ 💠 ᴋᴀᴠɪ-x ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ.`
global.kavixwatermark = process.env.KAVIXWATERMARK || `⚙️ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ-x`
global.kavixcomp = process.env.KAVIXCOMP || "✅ ʏᴏᴜʀ ᴀᴄᴛɪᴏɴ ɪs ᴄᴏᴍᴘʟᴇᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.";
global.kavixerr = process.env.KAVIXERR || "❌ ʏᴏᴜʀ ᴀᴄᴛɪᴏɴ ᴡᴀs ɴᴏᴛ ᴄᴏᴍᴘʟᴇᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.";
global.kavixdone = process.env.KAVIXDONE || "✔️ ʏᴏᴜʀ ᴀᴄᴛɪᴏɴ ɪs ᴅᴏɴᴇ!";
global.kavixerr2 = process.env.KAVIXERR2 || '❌ ᴀɴ ᴜɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ.';
global.processing = process.env.PROCESSING || `⚙️ ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇǫᴜᴇsᴛ... ᴘʟᴇᴀsᴇ ʜᴀɴɢ ᴏɴ.`;
global.timeout = process.env.TIMEOUT || "⏰ ʀᴇǫᴜᴇsᴛ ᴛɪᴍᴇᴅ ᴏᴜᴛ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ.";
global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})