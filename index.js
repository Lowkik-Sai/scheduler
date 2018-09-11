const botconfig = require("./botconfig.json");
const tokenfile = botconfig.token;
const Discord = require("Discord.js");
const fs = require("fs");
const bot = new Discord.Client({DisableEveryone: true});
bot.commands = new Discord.Collection();
const embed = require("./Schedule/boss.js")
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const sql = require('better-sqlite-pool');
const myEnmap = new Enmap({name: "users"});
// non-cached, auto-fetch enmap: 
const otherEnmap = new Enmap({
  name: "settings",
  autoFetch: true,
  fetchAll: false
});

myEnmap.defer.then( () => {
    console.log(myEnmap.size + " keys loaded");
  });

  const talkedRecently = new Set();



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
    
    process.env.TZ = "Europe/Athens";
    //Kutum
    var schedule = require('node-schedule');
    var kutum1 = new schedule.RecurrenceRule();

    kutum1.dayOfWeek = [1,3,7];
    kutum1.hour = 0;
    kutum1.minute = 38;

    
    var j = schedule.scheduleJob(kutum1, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
    });
        
    var kutum2 = new schedule.RecurrenceRule();
    kutum2.dayOfWeek = [2,4];
    kutum2.hour = 1
    kutum2.minute = 50 
    var j = schedule.scheduleJob(kutum2, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
    
   }); 
    var kutum3 = new schedule.RecurrenceRule();
    kutum3.dayOfWeek = [0];
    kutum3.hour = 4
    kutum3.minute = 50 
    var j = schedule.scheduleJob(kutum3, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
    });
    var kutum4 = new schedule.RecurrenceRule();
    kutum4.dayOfWeek = [2,4,5,6];
    kutum4.hour = 8
    kutum4.minute = 50 
    var j = schedule.scheduleJob(kutum4, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
    });
    var kutum5 = new schedule.RecurrenceRule();
    kutum5.dayOfWeek = [1,4];
    kutum5.hour = 15
    kutum5.minute = 50 
    var j = schedule.scheduleJob(kutum5, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
    });
    var kutum6 = new schedule.RecurrenceRule();
    kutum6.dayOfWeek = [3];
    kutum6.hour = 18
    kutum6.minute = 50 
    var j = schedule.scheduleJob(kutum6, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
    });
    var kutum6 = new schedule.RecurrenceRule();
    kutum6.dayOfWeek = [5];
    kutum6.hour = 22
    kutum6.minute = 5 
    var j = schedule.scheduleJob(kutum6, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: kutum});
        console.log('Boss Spawn')
});

    //Karanda
    
    var Karanda1 = new schedule.RecurrenceRule();
    Karanda1.dayOfWeek = [2,6];
    Karanda1.hour = 0
    Karanda1.minute = 5 
    var j = schedule.scheduleJob(Karanda1, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
    });
        
    var Karanda2 = new schedule.RecurrenceRule();
    Karanda2.dayOfWeek = [1,3];
    Karanda2.hour = 1
    Karanda2.minute = 50 
    var j = schedule.scheduleJob(Karanda2, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
    
   }); 
    var Karanda3 = new schedule.RecurrenceRule();
    Karanda3.dayOfWeek = [5];
    Karanda3.hour = 4
    Karanda3.minute = 50 
    var j = schedule.scheduleJob(kutum3, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
    });
    var Karanda4 = new schedule.RecurrenceRule();
    Karanda4.dayOfWeek = [3];
    Karanda4.hour = 8
    Karanda4.minute = 50 
    var j = schedule.scheduleJob(Karanda4, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
    });
    var Karanda5 = new schedule.RecurrenceRule();
    Karanda5.dayOfWeek = [5];
    Karanda5.hour = 11
    Karanda5.minute = 50 
    var j = schedule.scheduleJob(Karanda5, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
    });
    var Karanda6 = new schedule.RecurrenceRule();
    Karanda6.dayOfWeek = [0,2,6];
    Karanda6.hour = 18
    Karanda6.minute = 50 
    var j = schedule.scheduleJob(Karanda6, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
    });
    var Karanda7 = new schedule.RecurrenceRule();
    Karanda7.dayOfWeek = [3,4];
    Karanda7.hour = 22
    Karanda7.minute = 5 
    var j = schedule.scheduleJob(Karanda7, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: karanda});
        console.log('Boss Spawn')
});
    //Kzarka
    
    var Kzarka1 = new schedule.RecurrenceRule();
    Kzarka1.dayOfWeek = [5];
    Kzarka1.hour = 0
    Kzarka1.minute = 5 
    var j = schedule.scheduleJob(Kzarka1, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
        
    var Kzarka2 = new schedule.RecurrenceRule();
    Kzarka2.dayOfWeek = [0];
    Kzarka2.hour = 1
    Kzarka2.minute = 50 
    var j = schedule.scheduleJob(Kzarka2, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
     }); 
     
    var Kzarka3 = new schedule.RecurrenceRule();
    Kzarka3.dayOfWeek = [1,2,3];
    Kzarka3.hour = 4
    Kzarka3.minute = 50 
    var j = schedule.scheduleJob(Kzarka3, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
    var Kzarka4 = new schedule.RecurrenceRule();
    Kzarka4.dayOfWeek = [1];
    Kzarka4.hour = 8
    Kzarka4.minute = 50 
    var j = schedule.scheduleJob(Kzarka4, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
    var Kzarka5 = new schedule.RecurrenceRule();
    Kzarka5.dayOfWeek = [0];
    Kzarka5.hour = 11
    Kzarka5.minute = 50 
    var j = schedule.scheduleJob(Kzarka5, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
    var Kzarka6 = new schedule.RecurrenceRule();
    Kzarka6.dayOfWeek = [3];
    Kzarka6.hour = 15
    Kzarka6.minute = 50 
    var j = schedule.scheduleJob(Kzarka6, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
    var Kzarka7 = new schedule.RecurrenceRule();
    Kzarka7.dayOfWeek = [5,6];
    Kzarka7.hour = 18
    Kzarka7.minute = 50
    var j = schedule.scheduleJob(Kzarka7, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
    var Kzarka8 = new schedule.RecurrenceRule();
    Kzarka8.dayOfWeek = [1,2,3,5,7];
    Kzarka8.hour = 22
    Kzarka8.minute = 5
    var j = schedule.scheduleJob(Kzarka8, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Kzarka});
        console.log('Boss Spawn')
    });
    //Nouver
    
    var Nouver1 = new schedule.RecurrenceRule();
    Nouver1.dayOfWeek = [4,7];
    Nouver1.hour = 0
    Nouver1.minute = 5 
    var j = schedule.scheduleJob(Nouver1, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
        
    var Nouver2 = new schedule.RecurrenceRule();
    Nouver2.dayOfWeek = [5];
    Nouver2.hour = 1
    Nouver2.minute = 50 
    var j = schedule.scheduleJob(Nouver2, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    
   }); 
    var Nouver3 = new schedule.RecurrenceRule();
    Nouver3.dayOfWeek = [4,6];
    Nouver3.hour = 4
    Nouver3.minute = 50 
    var j = schedule.scheduleJob(Nouver3, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
    var Nouver4 = new schedule.RecurrenceRule();
    Nouver4.dayOfWeek = [0];
    Nouver4.hour = 8
    Nouver4.minute = 50 
    var j = schedule.scheduleJob(Nouver4, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
    var Nouver5 = new schedule.RecurrenceRule();
    Nouver5.dayOfWeek = [1,4,6];
    Nouver5.hour = 11
    Nouver5.minute = 50 
    var j = schedule.scheduleJob(Nouver5, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
    var Nouver6 = new schedule.RecurrenceRule();
    Nouver6.dayOfWeek = [2,5];
    Nouver6.hour = 15
    Nouver6.minute = 50 
    var j = schedule.scheduleJob(Nouver6, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
    var Nouver7 = new schedule.RecurrenceRule();
    Nouver7.dayOfWeek = [1];
    Nouver7.hour = 18
    Nouver7.minute = 50 
    var j = schedule.scheduleJob(Nouver7, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
    var Nouver8 = new schedule.RecurrenceRule();
    Nouver8.dayOfWeek = [0,2];
    Nouver8.hour = 22
    Nouver8.minute = 5 
    var j = schedule.scheduleJob(Nouver8, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Nouver});
        console.log('Boss Spawn')
    });
    //Offin
    
    var Offin1 = new schedule.RecurrenceRule();
    Offin1.dayOfWeek = [6];
    Offin1.hour = 1
    Offin1.minute = 50 
    var j = schedule.scheduleJob(Offin1, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Offin});
        console.log('Boss Spawn')
    });
        
    var Offin2 = new schedule.RecurrenceRule();
    Offin2.dayOfWeek = [2];
    Offin2.hour = 11
    Offin2.minute = 50 
    var j = schedule.scheduleJob(Offin2, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Offin});
        console.log('Boss Spawn')
    
   }); 
    var Offin3 = new schedule.RecurrenceRule();
    Offin3.dayOfWeek = [4];
    Offin3.hour = 18
    Offin3.minute = 50 
    var j = schedule.scheduleJob(Offin3, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Offin});
        console.log('Boss Spawn')
    });
    
    //Vell
    
    var Vell1 = new schedule.RecurrenceRule();
    Vell1.dayOfWeek = [7];
    Vell1.hour = 15
    Vell1.minute = 50
    var j = schedule.scheduleJob(Vell1, function(){
        let kutum = require('./Schedule/boss.js');
        bot.channels.get("422437762893873172").send({embed: Vell});
        console.log('Boss Spawn')
});
      console.log('The answer to life, the universe, and everything!');


 

    



bot.login(botconfig.token);