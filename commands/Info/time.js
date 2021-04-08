const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

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
			.setColor('RANDOM')
			.addField('Today is', `${moment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
		message.channel.send(pEmbed);
    }
}

