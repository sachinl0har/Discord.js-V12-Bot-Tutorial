const Discord = require('discord.js');
const config = require('../../configs/config.json');
const canvacord = require('canvacord')//npm i canvacord in your terminal 
 const { MessageAttachment } = require("discord.js");

module.exports = {
    config: {
        name: 'bed',
        description: 'Fun Bed',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        let user =  message.author;
            let user2 = message.mentions.users.first() 
            if(!user2) return message.reply(`No User Mentioned !`)
            let triggered = await canvacord.Canvas.bed(user.displayAvatarURL({ format: "png", dynamic: false }),user2.displayAvatarURL({ format: "png", dynamic: false }));
            let attachment = new MessageAttachment(triggered, "bed.png");
            return message.channel.send(attachment);

          
    }
}