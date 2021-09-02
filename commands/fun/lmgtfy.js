const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'lmgtfy',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const query = encodeURIComponent(args.join(" "));
    const url = `https://lmgtfy.com/?q=${query}&s=g`;

    message.channel.send(url);
    }
}

