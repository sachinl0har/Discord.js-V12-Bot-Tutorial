const Discord = require('discord.js');
const config = require('../../configs/config.json');
const axios = require('axios');
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: 'blacktwitter',
        description: 'Fun blacktwitter',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        let randomNum = Math.floor(Math.random() * 25);
    await axios.get(`https://www.reddit.com/r/BlackPeopleTwitter/.json`).then(r => {
        message.channel.send(
            
            new MessageEmbed()
            .setColor('RANDOM')
           
            .setImage(r.data.data.children[randomNum].data.url)
            );
    }).catch (console.error());
} 
}