const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'voicekick',
        description: '',
        aliases: ["vk"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
        return message.channel.send(
          "Missing Permissions"
        );
  
      if (!message.mentions.members.first())
        return message.channel.send(
          `User Not found`
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`User not found`);
  
      message.mentions.members.first().voice.kick();
  
      message.channel.send(`User Kicked!`);
    
    }
}
