const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'ping',
        description: 'Shows bot latency',
        aliases: ["ping"],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
    
        const embed = new MessageEmbed()
    const latency = `\`\`\`ini\n[ ${bot.ws.ping}ms ]\`\`\``;
    
    embed.setTitle(`Pong!`)
      .setColor(config.embedcolor)
      .setThumbnail("https://media.discordapp.net/attachments/747094092596510841/767079159977082910/2102a19ea556e1d1c54f40a3eda0d775.gif")
      .setDescription('')
      .addField('Latency', latency, true)
      
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);

    }
}

