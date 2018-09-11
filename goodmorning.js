const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NDg4MTI2ODYzNjA5Mjk4OTc0.DnXrJg.UKSsmLoFBXHOdWKN6dn2GSgDGmM").then(() => {
    console.log("I am ready");
    var guild = client.guilds.get('379054017583513601');
    if(guild && guild.channels.get('422437762893873172')){
        guild.channels.get('channelid').send("Good Morning").then(() => client.destroy());
    } else {
        console.log("nope");
        //if the bot doesn't have guild with the id guildid
        // or if the guild doesn't have the channel with id channelid
    }
    client.destroy();
});