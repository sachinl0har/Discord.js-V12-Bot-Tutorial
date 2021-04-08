const Discord = require('discord.js');
const config = require('../../configs/config.json');
    const ms = require('ms');

module.exports = {
    config: {
        name: 'uptime',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
message.reply(`${ms(client.uptime)}`)
    }
}

