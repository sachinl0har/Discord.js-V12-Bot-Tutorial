const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Discord Bot Allive!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// PACKAGES

const Discord = require('discord.js');
const config = require('./configs/config.json');
const fs = require('fs');
const db = require('quick.db');

const path = require("path");

const chalk = require("chalk");
const moment = require("moment"); 
var Jimp = require("jimp");
const request = require("request");
const axios = require("axios");
const snekfetch = require("snekfetch");
const fetch = require("node-fetch");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const canvas = require("discord-canvas"),
welcomeCanvas = new canvas.Welcome();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("AIzaSyDAKrsoe-Lcp3_8NIlmiUQViO3-8zA1pfI");


const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;
client.emotes = require('./configs/emotes.json')
client.filters = require('./configs/filters.json');

["aliases", "commands"].forEach(cmd => client[cmd] = new Discord.Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');



// EVENTS

client.on('ready', async() => {
    console.log('Alpha Started!');
    await client.channels.cache.get("823471954262098000").send({embed:{
      title: 'CLIENT.ON',
      description: `AcroNoid Bot Started`,
      color: 'RED',
    }})
});

// DEBUG
client.on("debug", async info => {
   await client.channels.cache.get("823471954262098000").send({embed:{
     title: 'DEBUG',
     description: `debug -> ${info}`,
     color: 'RED',
   }});
});

//ERROR
client.on("error", async error => {
    await client.channels.cache.get("823471954262098000").send({embed:{
      title: 'ERROR',
      description: `client's WebSocket encountered a connection error: ${error}`,
      color: 'RED',
    }});
});

client.on("reconnecting", async error => {
    await client.channels.cache.get("823471954262098000").send({embed:{
      title: 'RECONNECTING',
      description: `client tries to reconnect to the WebSocket`,
      color: 'RED',
    }});
});

client.on("resume", async replayed => {
    await client.channels.cache.get("823471954262098000").send({embed:{
      title: 'RESUME',
      description: `whenever a WebSocket resumes, ${replayed} replays`,
      color: 'RED',
    }});
});


// GUILD CREATE
client.on("guildCreate", async guild => { 
   const { MessageEmbed } = require("discord.js"); 
   const ID = "795530898694995988"; 
   // const sowner = `${guild.owner.user}`; 
   const embed = new MessageEmbed() 
   .setTitle("New Server Joined!") 
   .setImage(`${guild.iconURL({ dynamic: true, size: 2048 })}`) 
   .addField(`Server Name:`, `${guild.name}`) 
   .addField(`Server ID:`, `${guild.id}`) 
   .addField(`Members:`, `${guild.memberCount}`) 
   // .addField(`Server Owner Tag:`, `${sowner.tag}`) 
   // .addField(`ServerOwner ID:`, `${sowner.id}`) 
   .setTimestamp() .setColor("RANDOM") 
   .setFooter(`My new Server Count - ${client.guilds.cache.size}`); await client.channels.cache.get("795530898694995988").send(embed);});

// GUILD DELETE
client.on("guildDelete", async guild => { 
   const { MessageEmbed } = require("discord.js"); 
   const ID = "795530898694995988"; 
   // const sowner = `${guild.owner.user}`; 
   const embed = new MessageEmbed() 
   .setTitle("AcroNoid Removed from the server") 
   //.setImage(`${guild.iconURL({ dynamic: true, size: 2048 })}`) 
   .addField(`Server Name:`, `${guild.name}`) 
   .addField(`Server ID:`, `${guild.id}`) 
   .addField(`Members:`, `${guild.memberCount}`) 
   // .addField(`Server Owner Tag:`, `${sowner.tag}`) 
   // .addField(`ServerOwner ID:`, `${sowner.id}`) 
   .setTimestamp() .setColor("RANDOM") 
   .setFooter(`My new Server Count - ${client.guilds.cache.size}`); await client.channels.cache.get("795530898694995988").send(embed);});



//CHATBOT FEATURE 

client.on("message", async message => {
        let sChannel = db.fetch(`chatbot_${message.guild.id}`);
        if (sChannel === null) {
            return;
          }
            if (message.author.bot && message.author.discriminator !== '0000') return;
            if(message.channel.id === sChannel){
                let content = message.content;
                if(!content) return;
                    chatbot.getReply(content).then(r => client.channels.cache.get(sChannel).send(r));
            }
         });

    

    // snipe

    client.snipes = new Map();

    client.on('messageDelete', function(message, channel){
    client.snipes.set(message.channel.id,{
        content:message.content,
        author:message.author.tag,
        image:message.attachments.first() ? message.attachments.first().proxyURL : null
})
});

// welcome
client.on("guildMemberAdd", async member =>{
let chx = db.get(`welchannel_${member.guild.id}`);
  
    if (chx === null) {
      return;
    }
    
    
    let image = await welcomeCanvas
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setMemberCount(member.guild.memberCount)
      .setGuildName(member.guild.name)
      .setAvatar(member.user.displayAvatarURL({dynamic:false , format: 'jpg',size: 512}))
      .setColor("border", "#ff0000")
      .setColor("username-box", "#ff0000")
      .setColor("discriminator-box", "#ff0000")
      .setColor("message-box", "#ff0000")
      .setColor("title", "#ff0000")
      .setColor("avatar", "#ff0000")
      .setBackground("https://media.discordapp.net/attachments/773005768458764349/789056032767868929/9016087.jpg")
      .toAttachment();
       
    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
     
    client.channels.cache.get(chx).send(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                           <a:w1:742301243468415046>  <a:e1:742301907825197147>  <a:l1:742301422770454598>  <a:c1:742301682309791765>  <a:o1:742302149127700502>  <a:m1:742301508879515718>  <a:e1:742301907825197147>\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n<a:whitearrow:774621900923469844> HEY ${member.user} <a:wel:742304734383308881><a:come:742305267521159220> TO **__${member.guild.name}__**!\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n<a:whitearrow:774621900923469844> ENJOY YOUR STAY WITH **__${member.guild.name}__**!\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n**•**ID:**${member.user.id}**\n**•**Bot:**${member.user.bot ? 'Yes' : 'No'}**\n**•**Created At:**${moment(member.user.createdAt).format('MMMM Do YYYY, H:mm:ss a')}**\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n`,attachment);
});

  

client.login(config.token)
const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)