const botconfig = require("./botconfig.json");
const tokenfile = botconfig.token;
const Discord = require("Discord.js");
const fs = require("fs");
const bot = new Discord.Client({DisableEveryone: true});
bot.commands = new Discord.Collection();
const Enmap = require("enmap")

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Black Desert Online", {type: "PLAYING"});;
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./commands/${file}`);
      let eventName = file.split(".")[0];
    
      bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
  });

  bot.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(botconfig.prefix) !== 0) return;
  

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  

    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args);
    } catch (err) {
      console.error(err);
    }
  });



 
    
    //Kutum
    const cron = require('node-cron');
    var schedule = require('node-schedule');

    var task = cron.schedule('05 00 * * 1,3,7', () =>  {
        let kutum = require('./Schedule/boss.js');
        bot.channels.get(botconfig.channel).send({embed: kutum});
        console.log('Boss Spawn');
      }, {
    
      start: true,
      scheduled: true,
      
    });


    var kutum2 = cron.schedule('50 01 * * 2,4', () =>  {
      let kutum = require('./Schedule/boss.js');
      bot.channels.get(botconfig.channel).send({embed: kutum});
            console.log('Boss Spawn');
        }, {
        
        start: true,
        scheduled: true,
        
        });
//     
var kutum3 = cron.schedule('50 04 * * 0', () =>  {
  let kutum = require('./Schedule/boss.js');
  bot.channels.get(botconfig.channel).send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
// 
var kutum4 = cron.schedule('50 08 * * 2,4,5,6', () =>  {
  let kutum = require('./Schedule/boss.js');
  bot.channels.get(botconfig.channel).send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});   

var kutum5 = cron.schedule('50 15 * * 1,4', () =>  {
  let kutum = require('./Schedule/boss.js');
  bot.channels.get(botconfig.channel).send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});  

var kutum6 = cron.schedule('50 18 * * 3', () =>  {
  let kutum = require('./Schedule/boss.js');
  bot.channels.get(botconfig.channel).send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

}); 

var kutum7 = cron.schedule('05 22 * * 5', () =>  {
  let kutum = require('./Schedule/boss.js');
  bot.channels.get(botconfig.channel).send({embed: kutum});
    console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
//     //Karanda
var Karanda1 = cron.schedule('05 00 * * 2,6', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Karanda2 = cron.schedule('50 01 * * 1,3', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
        
var Karanda3 = cron.schedule('50 04 * * 5', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Karanda4 = cron.schedule('50 08 * * 3', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Karanda5 = cron.schedule('50 11 * * 5', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Karanda6 = cron.schedule('50 18 * * 0,2,6', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Karanda7 = cron.schedule('05 22 * * 3,4', () =>  {
  let karanda = require('./Schedule/karanda.js');
  bot.channels.get(botconfig.channel).send({embed: karanda});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
//     //Kzarka
var Kzarka1 = cron.schedule('05 00 * * 5', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Kzarka2 = cron.schedule('50 01 * * 0', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
        
var Kzarka3 = cron.schedule('50 04 * * 1,2,3', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
     
var Kzarka4 = cron.schedule('50 08 * * 1', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Kzarka5 = cron.schedule('50 11 * * 0', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Kzarka6 = cron.schedule('50 15 * * 3', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Kzarka7 = cron.schedule('50 18 * * 5,6', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Madrid'
});
var Kzarka8 = cron.schedule('05 22 * * 1,2,3,5,7', () =>  {
  let Kzarka = require('./Schedule/Kzarka.js');
  bot.channels.get(botconfig.channel).send({embed: Kzarka});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,
timeZone: 'Europe/Madrid'
});

//     //Nouver
var Nouver1 = cron.schedule('05 00 * * 4,7', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Nouver2 = cron.schedule('50 01 * * 5', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
        
var Nouver3 = cron.schedule('50 04 * * 4,6', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Nouver4 = cron.schedule('50 08 * * 0', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Nouver5 = cron.schedule('50 11 * * 1,4,6', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Nouver6 = cron.schedule('50 15 * * 2,5', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
}, {

start: true,
scheduled: true,

});
var Nouver7 = cron.schedule('50 18 * * 1', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});
var Nouver8 = cron.schedule('5 22 * * 0,2', () =>  {
  let Nouver = require('./Schedule/Nouver.js');
  bot.channels.get(botconfig.channel).send({embed: Nouver});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});

//     //Offin
var Offin1 = cron.schedule('50 01 * * 6', () =>  {
  let Offin = require('./Schedule/Offin.js');
  bot.channels.get(botconfig.channel).send({embed: Offin});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});   
var Offin2 = cron.schedule('50 11 * * 2', () =>  {
  let Offin = require('./Schedule/Offin.js');
  bot.channels.get(botconfig.channel).send({embed: Offin});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});   
        
var Offin3 = cron.schedule('50 18 * * 4', () =>  {
  let Offin = require('./Schedule/Offin.js');
  bot.channels.get(botconfig.channel).send({embed: Offin});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});   

//     //Vell
var Vell = cron.schedule('50 15 * * 7', () =>  {
  let Vell = require('./Schedule/Vell.js');
  bot.channels.get(botconfig.channel).send({embed: Vell});
  console.log('Boss Spawn');
}, {

start: true,
scheduled: true,

});   
      console.log('Scheduler is feeling happy!');


 

    



bot.login(botconfig.token);
