const fs = require("fs");
module.exports.config = {
  name: "gm",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gm") ||
     react.includes("Gm") ||
     react.includes("Morning") ||
react.includes("morning")) {
    var msg = {
        body: `★━━━━━━━━━━━━━★😍 𝐔𝐓𝐇 𝐉𝐀𝐎𝐎 𝐊𝐔𝐌𝐁𝐊𝐀𝐑𝐀𝐍𝐎 𝐊𝐈 𝐀𝐔𝐋𝐀𝐃𝐎😒😍★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/gmm.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
