
// PACKAGES

const Discord = require('discord.js');
const config = require('./configs/config.json');
const fs = require('fs');
const db = require('quick.db');

const path = require("path");
const alexa = require("alexa-bot-api");
var chatbot = new alexa("chat bot api");


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

fs.readdir('./player/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});


// EVENTS

client.on('ready', async() => {
    console.log('Alpha Started!');
});

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


client.login(config.token)
