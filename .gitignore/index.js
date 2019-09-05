const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on ("ready",function() {
bot.user.setGame("Haxya Survie, !!help")
console.log("Le bot à bien été connecte")
});

bot.login ("NTU1MzgxMjk5MDg3NDA5MTUy.XXFViA.z97j5U_xTbsugSF35Knk8XfFI4s");
