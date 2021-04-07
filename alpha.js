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
var chatbot = new alexa("chatbot api");


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
});


client.login(config.token)
