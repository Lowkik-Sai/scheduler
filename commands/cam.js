const Discord = require("discord.js"); 
var client = new Discord.Client

const cannon = {
    "title": "In the distance you can hear a loud bang!",
    "color": 10703254,
    "timestamp": new Date(),
    "footer": {
    
      "text": "_"
    },
    
    "image": {
      "url": "https://www.crowdfunder.co.uk/uploads/projects/1406559174-cannon-firing.jpg"
    },
    "author": {
      "name": "Cam the Cannon",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": []
  };
 
  const camon = {
    "title": "A large Cam-on ball lands next to you in the dirt. You hold it up and notice a note on it.",
    "color": 5333411,
    "timestamp": new Date(),
    "footer": {
      "text": "_"
    },
    "image": {
      "url": "https://i.ytimg.com/vi/g5bNdf8JaN8/maxresdefault.jpg"
    },
    "author": {
      "name": "Cam the Cannon",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": []
  };

  const cry = {
    "title": "You look at the note in your hands, you feel a tear well up...",
    "color": 6396756,
    "timestamp": new Date(),
    "footer": {
      "text": "_"
    },
    "image": {
      "url": "https://www.desicomments.com/wp-content/uploads/2017/07/You-Are-Beautiful-Note-Photo.jpg"
    },
    "author": {
      "name": "Cam the Cannon",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": []
  };
    exports.run = (client, message, args) => {
        message.guild.fetchMember(message.author.id)
        .then(member => {
            console.log(message.author.id)
            try {
        
                    message.author.send({embed: cannon});    
        
                
                message.author.send({embed: camon});
                message.author.send({embed: cry});
              }
              catch(error) {
                console.error(error);
                // expected output: SyntaxError: unterminated string literal
                // Note - error messages will vary depending on browser
              }
          
          
}
        )};

 module.exports.cam = {

     name: "cam"
 }