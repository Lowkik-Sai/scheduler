const botconfig = require("./botconfig.json");
const tokenfile = botconfig.token;
const Discord = require("Discord.js");
const fs = require("fs");
const bot = new Discord.Client({DisableEveryone: true});
bot.commands = new Discord.Collection();
const embed = require("./Schedule/boss.js")
// const Enmap = require("enmap");
// const EnmapLevel = require('enmap-level');
// const sql = require('better-sqlite-pool');
// //const myEnmap = new Enmap({name: "users"});
// // non-cached, auto-fetch enmap: 
// const myEnmap = new Enmap({
//   name: "user",
//   persistent: true,
//   autoFetch: true,
//   fetchAll: true
// });
// myEnmap.set("userar", {
//   ids: "",
  
// });
// myEnmap.defer.then( () => {
//     console.log(myEnmap.size + " keys loaded");
//   });
  
// module.exports = {
//   myEnmap
// }


// bot.on("ready", () => {

//   const fetch = myEnmap.fetchEverything();
//   for (let i = 0; i < fetch.length; i++) {
//     console.log(fetch[i]);
//   }
   
//   // console.log(fetch);
//   // bot.users.get(fetch).send("someMessage");
// })


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("With Bodies", {type: "PLAYING"});
});
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./commands/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
  });

  bot.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(botconfig.prefix) !== 0) return;
  
    // This is the best way to define args. Trust me.
    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // The list of if/else is replaced with those simple 2 lines:
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args);
    } catch (err) {
      console.error(err);
    }
  });
    // fs.readdir("./commands/", (err, files) => {

    //     if(err) console.log(err);

    //     let jsfile = files.filter(f => f.split(".").pop() === "js")
    //     if(jsfile.length <= 0) {
    //         console.log("Couldn't find commands.");
    //         return;
    //     }

    //     jsfile.forEach((f, i) =>{
    //         let props = require(`./commands/${f}`);
    //         console.log(`${f} loaded!`);
    //         bot.commands.set(props.help.name, props);
    //     })
    // })

    // bot.on("message", async message =>{

    // let prefix = botconfig.prefix;
    // let messageArray = message.content.split(" ");
    // let cmd = messageArray[0];
    // let args  = messageArray.slice(1);

    // let commandfile = bot.commands.get(cmd.slice(prefix.length));
    //     if(commandfile) commandfile.run(bot,message,args);
    
    // });
    
    
    //Kutum
    const cron = require('node-cron');
    var schedule = require('node-schedule');

    var task = cron.schedule('05 00 * * 1,3,7', () =>  {
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn');
      }, {
    
      start: true,
      scheduled: true,
      timeZone: 'Europe/Athens'
    });


    var kutum2 = cron.schedule('50 01 * * 2,4', () =>  {
            let kutum2 = require('./Schedule/boss.js');
            bot.channels.get("422437762893873172").send({embed: kutum});
            console.log('Boss Spawn');
        }, {
        
        start: true,
        scheduled: true,
        timeZone: 'Europe/Athens'
        });
//     
var kutum3 = cron.schedule('50 04 * * 0', () =>  {
    let kutum3 = require('./Schedule/boss.js');
    bot.channels.get("422437762893873172").send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
// 
var kutum4 = cron.schedule('50 08 * * 2,4,5,6', () =>  {
    let kutum4 = require('./Schedule/boss.js');
    bot.channels.get("422437762893873172").send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});   

var kutum5 = cron.schedule('50 15 * * 1,4', () =>  {
    let kutum5 = require('./Schedule/boss.js');
    bot.channels.get("422437762893873172").send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});  

var kutum6 = cron.schedule('50 18 * * 3', () =>  {
    let kutum6 = require('./Schedule/boss.js');
    bot.channels.get("422437762893873172").send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
}); 

var kutum7 = cron.schedule('05 22 * * 5', () =>  {
    let kutum7 = require('./Schedule/boss.js');
    bot.channels.get("422437762893873172").send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
//     //Karanda
var Karanda1 = cron.schedule('05 00 * * 2,6', () =>  {
  let Karanda1 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Karanda2 = cron.schedule('50 01 * * 1,3', () =>  {
  let Karanda2 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
        
var Karanda3 = cron.schedule('50 04 * * 5', () =>  {
  let Karanda3 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Karanda4 = cron.schedule('50 08 * * 3', () =>  {
  let Karanda4 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Karanda5 = cron.schedule('50 11 * * 5', () =>  {
  let Karanda5 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Karanda6 = cron.schedule('50 18 * * 0,2,6', () =>  {
  let Karanda6 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Karanda7 = cron.schedule('05 22 * * 3,4', () =>  {
  let Karanda7 = require('./Schedule/karanda.js');
  bot.channels.get("422437762893873172").send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
//     //Kzarka
var Kzarka1 = cron.schedule('05 00 * * 5', () =>  {
  let Kzarka1 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Kzarka2 = cron.schedule('50 1 * * 0', () =>  {
  let Kzarka2 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
        
var Kzarka3 = cron.schedule('50 4 * * 1,2,3', () =>  {
  let Kzarka3 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
     
var Kzarka4 = cron.schedule('50 8 * * 1', () =>  {
  let Kzarka4 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Kzarka5 = cron.schedule('50 11 * * 0', () =>  {
  let Kzarka5 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Kzarka6 = cron.schedule('50 15 * * 3', () =>  {
  let Kzarka6 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Kzarka7 = cron.schedule('50 18 * * 5,6', () =>  {
  let Kzarka7 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Kzarka8 = cron.schedule('5 22 * * 1,2,3,5,7', () =>  {
  let Kzarka8 = require('./Schedule/Kzarka.js');
  bot.channels.get("422437762893873172").send({embed: kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});

//     //Nouver
var Nouver1 = cron.schedule('0 5 * * 4,7', () =>  {
  let Nouver1 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Nouver2 = cron.schedule('50 1 * * 5', () =>  {
  let Nouver2 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
        
var Nouver3 = cron.schedule('50 4 * * 4,6', () =>  {
  let Nouver3 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Nouver4 = cron.schedule('50 8 * * 0', () =>  {
  let Nouver4 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Nouver5 = cron.schedule('50 11 * * 1,4,6', () =>  {
  let Nouver5 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Nouver6 = cron.schedule('50 15 * * 2,5', () =>  {
  let Nouver6 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Nouver7 = cron.schedule('50 18 * * 1', () =>  {
  let Nouver7 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});
var Nouver8 = cron.schedule('5 22 * * 0,2', () =>  {
  let Nouver8 = require('./Schedule/Nouver.js');
  bot.channels.get("422437762893873172").send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});

//     //Offin
var Offin1 = cron.schedule('50 1 * * 6', () =>  {
  let Offin1 = require('./Schedule/Offin.js');
  bot.channels.get("422437762893873172").send({embed: Offin});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});   
var Offin2 = cron.schedule('50 11 * * 2', () =>  {
  let Offin2 = require('./Schedule/Offin.js');
  bot.channels.get("422437762893873172").send({embed: Offin});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});   
        
var Offin3 = cron.schedule('50 18 * * 4', () =>  {
  let Offin3 = require('./Schedule/Offin.js');
  bot.channels.get("422437762893873172").send({embed: Offin});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});   

//     //Vell
var Vell = cron.schedule('50 15 * * 7', () =>  {
  let Vell = require('./Schedule/Vell.js');
  bot.channels.get("422437762893873172").send({embed: Vell});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Athens'
});   
      console.log('The answer to life, the universe, and everything!');


 

    



bot.login(botconfig.token);
