# Discord.js-Tutorial

Here is a Discord.js Bot Tutorial.

## Getting Started

For Getting Started you should atleast have a basic knowledge of JavaScript. Basic Knowledge means you should know the basic functions and Syntax's.

### Prerequisites and Installing Softwares

First you need to download the latest verison of [Node.js](https://nodejs.org/en/) after installing, if you want to check if node.js is installed in your computer or not. go to the search bar and type `CMD` open it and type `node --version` in the terminal it should show you the latest verison which you installed.
Second you need a code editor i recommend you [Visual Studio Code](https://code.visualstudio.com/download), Then after installation open Visual Studio Code and go to Extensions and download the extension of JavaScript.

### Create Discord Application

Go to [Discord Developer Portal](https://discord.com/developers/applications) And click "New Application" And then name your application then click "Create" .Now , Head over to Bot. Click Add Bot, then you customize the name and avatar(If youd like). Now lets get coding.

### Coding

Make a folder where you want to store all your bot files. Open CMD with that Folder location and type `npm init` This will create a `package.json` file in your directory.Then open Visual Studio Code with that Directory.then make a file with your main file name, in my case its `alpha.js` then type this code 
```js
// IMPORT MAIN FILES AND PACKAGES WHICH IS REQUIRED.
const Discord = require('discord.js');
const config = require('./configs/config.json'); // AS YOU SEE YOU HAVE TO MAKE A FOLDER NAMED `configs` AND IN THAT FOLDER MAKE `config.json` FILE. CODE WILL BE GIVEN ABOVE.
const fs = require('fs');
const db = require('quick.db');
const path = require("path");
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
```

Config File
```js
{
    "prefix": "your prefix here",    
    "dev": "736977089307345004", // DEVELOEPRS ID HERE      
    "token": "bot token here"     
}
```

### Command Handler
command.js // READ FILES INSIDE COMMANDS FOLDER
```js
const fs = require('fs');
module.exports = (client) => {
    const load = dirs => {
        const commands = fs.readdirSync(`./commands/${dirs}/`).filter(cmd => cmd.endsWith('.js'));
        for (let cmd of commands) {
            let pull = require(`../commands/${dirs}/${cmd}`);
            client.commands.set(pull.config.name, pull);
            if (pull.config.aliases) pull.config.aliases.forEach(cmd => client.aliases.set(cmd, pull.config.name));
        };
    };
    ["Folder Names Inside Commands folder"].forEach(cmd => load(cmd));
};
```

### Event Handler
event.js // READ EVENT FILES    
```js
const fs = require('fs');
module.exports = (client) => {
    const load = dirs => {
        const events = fs.readdirSync(`./events/${dirs}`).filter(events => events.endsWith('.js'));
        for (let file of events) {
            const events = require(`../events/${dirs}/${file}`);
            let eventName = file.split('.')[0];
            client.on(eventName, events.bind(null,client));
        };
    };
    ['client', 'guild'].forEach(events => load(events));
};
```

## More Advanced commands will be added soon stay tunned and follow. And if this was helpfull i will be glad if you give it a Star.
