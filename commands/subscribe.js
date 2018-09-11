const Discord = require("discord.js"); 
var client = new Discord.Client
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const sql = require('better-sqlite-pool');
const myEnmap = new Enmap({name: "users"});
var stringify = require('json-stringify-safe');



exports.run = (client, message, args) => {

    if (talkedRecently.has(msg.author.id)) {
        msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
} else {

       // the user can type the command ... your command code goes here :)

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 60000);
}

    // let user = message.mentions.user.first();
    // channel.send(user);
    message.guild.fetchMember(message.author.id)
    .then(member => {
        console.log(message.author.id)
        try {
            myEnmap.set("user", message.author.id);
          }
          catch(error) {
            console.error(error);
            // expected output: SyntaxError: unterminated string literal
            // Note - error messages will vary depending on browser
          }
        message.author.send("hello");
    });



}
 module.exports.subscribe = {

     name: "subscribe"
 }