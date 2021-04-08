const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: 'kick',
        description: 'Kicks a user from the server',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Missing Permissions.').then(m => {
            setTimeout(() => {
                m.delete()
            }, 3000);
        })
        
        if (!args[0]) return message.reply('Invalid arguments')
        
        
        let user = message.guild.members.cache.find(mem => mem.user.username.toLowerCase().startsWith(args[0].toLowerCase())) || message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!user) {
            message.reply('Invalid arguments')
            return;
          }
        
        if (user) {
          if(!message.guild.member(user).kickable) return message.reply('Cannot kick this user.')
        message.reply('User' + client.users.cache.get(user.id).tag + ' Kicked.')
         message.guild.member(user).kick()
         return;
        }
        
        
        
        
    }
}
