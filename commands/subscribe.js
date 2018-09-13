// const Discord = require("discord.js"); 
// var client = new Discord.Client
// const Enmap = require('enmap');
// const EnmapLevel = require('enmap-level');
// const sql = require('better-sqlite-pool');
// //const myEnmap = new Enmap({name: "users"});
// const index = require("./../index.js");
// let myEnmap = index.myEnmap
// var stringify = require('json-stringify-safe');
// let cooldown = new Set()
// let cdseconds = 5;


//     exports.run = (client, message, args) => {
//         if(!message.content.startsWith("!")) return;
//         if(cooldown.has(message.author.id)){
//             message.delete();
//            return message.reply("One time use command boi!")
//         }
//         cooldown.add(message.author.id);
//         message.guild.fetchMember(message.author.id)
//      .then(member => {
//          console.log(message.author.id)
//          try {
//              myEnmap.set(message.author.id, message.author.id);
//            }
//            catch(error) {
//              console.error(error);
//              // expected output: SyntaxError: unterminated string literal
//              // Note - error messages will vary depending on browser
//            }
       
//        message.author.send("hello");
       
//      });
//     setTimeout(() => {
//         cooldown.delete(message.author.id)
//         }, cdseconds * 10000000 )
// }


//  module.exports.subscribe = {

//      name: "subscribe"
//  }