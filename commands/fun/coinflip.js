const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'coinflip',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const responses = ['Heads', 'Tails'];
		const response =
		responses[Math.floor(Math.random() * responses.length)];
		message.channel.send(' Flipping...').then((msg) => {
			const Embed = new MessageEmbed()
				.setTitle('You filpped a . .')
				.setColor('BLUE')
				.setDescription(
					`${response}!`,
				);
			msg.edit(Embed);
		});
    }
}

