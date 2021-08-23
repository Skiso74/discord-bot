var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("ODc4MjQ2NTQ0MDkxMDE3MjQ3.YR-Y1Q.pCxggakdTpi8p0tqSARLcc2rumc")
