const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136199944";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_09_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBcUkxOUhhZUx3bDRVZHl5WnZ4R3dscjBHRHBvUlVPVHgzeUhxRlZhd1JNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFakJ6VEVVY1R2V3E4VmgwZlMzNFpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczMDJkMmI2LTBlODItNGJmOC1iOTJkLTI4NjQwMTUwNjUwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAyMzMsXG4gICAgICAxMjEsXG4gICAgICA2OSxcbiAgICAgIDE3NyxcbiAgICAgIDE2NSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NCxcbiAgICAgIDE0MCxcbiAgICAgIDY3LFxuICAgICAgOTksXG4gICAgICAyNTUsXG4gICAgICAxNDcsXG4gICAgICAxMzcsXG4gICAgICAxNDAsXG4gICAgICA5OSxcbiAgICAgIDE1OSxcbiAgICAgIDEzOCxcbiAgICAgIDc0LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgNCxcbiAgICAgIDEyMSxcbiAgICAgIDEzOCxcbiAgICAgIDEyLFxuICAgICAgMTc5LFxuICAgICAgMjI4LFxuICAgICAgMjA1LFxuICAgICAgNzgsXG4gICAgICAyMDIsXG4gICAgICAyMDgsXG4gICAgICAxNTQsXG4gICAgICAxNixcbiAgICAgIDIyLFxuICAgICAgNDksXG4gICAgICAxMzAsXG4gICAgICAyNDgsXG4gICAgICAxMTYsXG4gICAgICA0NixcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpaWjJGNUhTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2MTk5OTQ0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjY5NzY4OTk3MzE1MjI6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiV2VzdPCflKVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV0xqTDBERU9MU2w3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlwYTlnU1RBN210RUVDUWFLMEExY1JIRDltWk45OGVLQnBFbjBzaG03UlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidkNGNnpEZ01xSW1JVFU4QUkzZSt6SmRuOEFKZEl2TXdmVnh3VnJVMDMySW01VEIrYlRwSUkxZnNBL01QQ3l6Ym1ycUREVWNMMnczZ2J1VmkzbXc1QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiekcyYVBZSUVLc2tVS1NnVEJzT3V2MkJMQzlYZGJodmF1SHJWZDErRFRuKzZPMHNMdFlJU3RCZmE3Q0VjcHZlQ1M5SUh4V2N4a1ZFNm9lazFoOGJRREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjE5OTk0NDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU4NTc3NjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
