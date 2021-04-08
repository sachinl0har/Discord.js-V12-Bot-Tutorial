const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: 'ban',
        description: 'Bans a user from the server',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Missing Permissions`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Missing Permissions`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Missing User`)
    }
    
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Missing reason`)
   }
   target.ban({reason: args[1]})
    
    return message.channel.send(`User Banned ${target} (${target.id}) Reason ${args[1]}`)

        }
        }
  
