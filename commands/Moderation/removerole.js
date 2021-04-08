const Discord = require('discord.js');
const config = require('../../configs/config.json');
const db = require("quick.db");

module.exports = {
    config: {
        name: 'removerole',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES"))
        return message.channel.send(
          "Missing Permissions"
        );
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.channel.send(
          "Missing Permissions"
        );
  
      if (!args[0])
        return message.channel.send("User Not Found");
  
      let rMember =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(
          r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
        ) ||
        message.guild.members.cache.find(
          ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()
        );
      if (!rMember) return message.channel.send("Couldn't Find That User");
  
      let role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.get(args[1]) ||
        message.guild.roles.cache.find(
          rp =>
            rp.name.toLowerCase() ===
            args
              .slice(1)
              .join(" ")
              .toLocaleLowerCase()
        );
      if (!args[1]) return message.channel.send("Role not found");
  
      if (!role) return message.channel.send("Role not found");
  
      if (
        rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >=
        0
      )
        return message.channel.send(
          "Cannot remove role"
        );
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0)
        return message.channel.send(
          "Cannot remove role"
        );
      if (role.managed)
        return message.channel.send(
          "Cannot remove role"
        );
  
      if (!rMember.roles.cache.has(role.id))
        return message.channel.send("No role found");
      if (rMember.roles.cache.has(role.id)) await rMember.roles.remove(role.id);
  
      message.channel.send(`Role Removed of ${rMember.user.username}`);
    }
  };
