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
      .setColor('RANDOM')
      .addField('Latency', latency, true)
      .setTimestamp();
    message.channel.send(embed);

    }
}

