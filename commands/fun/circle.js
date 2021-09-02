const Discord = require('discord.js');
const config = require('../../configs/config.json');
const canvacord = require('canvacord')//npm i canvacord in your terminal 
 const { MessageAttachment } = require("discord.js");

module.exports = {
    config: {
        name: 'circle',
        description: 'Fun Circle',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        let user = message.mentions.users.first() || message.author;
            let triggered = await canvacord.Canvas.circle(user.displayAvatarURL({ format: "png", dynamic: false }));
            let attachment = new MessageAttachment(triggered, "circle.png");
            return message.channel.send(attachment);

          
    }
}