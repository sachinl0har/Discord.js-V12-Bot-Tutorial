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


const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["aliases", "commands"].forEach(cmd => client[cmd] = new Discord.Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');



// EVENTS

client.on('ready', async() => {
    console.log('Alpha Started!');
});


client.login(config.token)
