const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'support',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor(embedcolor)
    .setTitle(`SUPPORT SERVER INVITE`)
    .setDescription(`[CLICK HERE](https://discord.gg/Xqw2akR)`)
    message.channel.send(embed);
    }
}

