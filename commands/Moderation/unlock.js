const Discord = require('discord.js');
const config = require('../../configs/config.json');
const bot = new Discord.Client();

module.exports = {
    config: {
        name: 'unlock',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
    let channeltolock = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);

    if(!channeltolock) return message.reply(`No Channel Mentioned !`);
    
    let everyone = message.guild.roles.cache.get(message.guild.id)

    channeltolock.updateOverwrite(everyone, {
        SEND_MESSAGES: true
        
      },[`REPONSIBLE MODERATOR | ${message.author.tag}`])
      .then(message.reply(`UnLocked Channel ${channeltolock} ! `))
             .catch(console.error);
    }
}

