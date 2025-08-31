const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VnK3E1U2FVWXRDLzZYVTQrempYUzY5alROTUJwYkU5cUhGbXdKNzVGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVhtWnZJTkd6akl0MXI1Qk4zNjd4V004YnY1UVFBZUNyVWRGVXExcjMzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSkpWNTR6TU5tRlM5SkFZZ0FDWFV4ZXZVNVRhaURSRmlnMWZURnBTWjBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOaHEzMTk1NitUcnl5NFJXSXREZTNhNWsyM3JBOEhSNnJINGZnTmVXNVNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CMXJMOW40TkNoUUpCNGJRRlBMdFhhMGp2MnFDay9CV2s2Yjllc1lIMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkozZVF6UmZNY0IvK3pQMVJKNmsvRHpiTUUzVFhXekJXMlA5ditXWit4aVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdDcWJ5VEUxY2NMZi8yRlYxNzlkdmZFakYxR3JwMDJPWFFtTFU2T3VVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVENYYTVXalVxRGpza0FJcFdpcmtFb2xLRHQxbGVueWx6dXFZNFRZMGt6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ3MnRZOVlaT3VQRXJIRmhabHVCRFBSSWExWmZ2eFU5MkNqS0EwL05ieEtobnB4ekFPNWF2azNGSDhrdExYNk9OZVptaHk3dzhBTmZSM0xRQXBGMWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6Img5d0E0dmo0VnJOUkVja3B5WHQ0dFBwRjB3Y0IyRGpab2xRTGVLaFp6RnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3ODQ4NTg0MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0Q5OTJGMTlCQ0VGRjBBOUQ5QTJGRDU5MkQ2RkZCM0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjYzNDEzOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3ODQ4NTg0MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjI2MEZGQjA3QUI3MTMwQkE5NUNDMzYzQ0Y5OTQ3MEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjYzNDEzOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRURJVEgxMjMiLCJtZSI6eyJpZCI6IjQwNzg0ODU4NDMzOjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkILhtI9z4bSNyarJtCIsImxpZCI6IjExOTAwOTc4NTcwMDQxMTo2NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05pWDBsc1FrYmpReFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRqWlhHOGNXelVKY3Z2MzZSaVJ5aGZyaTFmWlh4RGUwcnJvUTJoVWI4U3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRYQ1NaTnhzeCtiamJiSURhajlJdllZeVRaOG92SXc5RlpwbmhwRzZZZDFKdElxSUZlVUgxV2FmYjJ1STFFNDI4M2Y4Y2U5RFlQYXZ1K3hod2JabEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRNWlNZkJZY3YrTXluRkdVVEQvYkRlMklITnQyei9yN3lSU1RnRmp6T0ZMK01zZ1ZiSmR6TUpRaTNETGdzRVZJYk5PcEZXakxTdllYZ0c0NnYvOXVpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzg0ODU4NDMzOjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU0MlZ4dkhGczFDWEw3OStrWWtjb1g2NHRYMlY4UTN0SzY2RU5vVkcvRXIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjYzNDEzNCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQUnUifQ==",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "40784858433",
  OWNER_NAME: process.env.OWNER_NAME || "cosmin",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
