const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'time',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const pEmbed = new MessageEmbed()
			.setColor(embedcolor)
			.addField('Today is', `${moment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
		message.channel.send(pEmbed);
    }
}

