const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const fetch = require('node-fetch')
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'github',
        description: 'Shows information about github user',
        aliases: ["github"],
        usage: '<query>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const name = args.join(' ');
		if (!name) {
			return message.channel.send(
			`${client.emotes.error}  User Not Found`,
			);
		}

		const url = `https://api.github.com/users/${name}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				`${client.emotes.error} Error`,
			);
		}

		try{
			const embed = new MessageEmbed()
				.setColor(embedcolor)
				.setTitle(`${response.login}`)
				.addFields(
					{ name: 'Followers', value: `${response.followers.toLocaleString()}` },
					{ name: 'Following', value: `${response.following.toLocaleString()}` },
					{ name: 'Repositories', value: `${response.public_repos.toLocaleString()}` },
					{ name: 'Email', value: `${response.email ? response.email : 'None'}` },
					{ name: 'Company', value: `${response.company ? response.company : 'None'}` },
					{ name: 'Location', value: `${response.location ? response.location : 'None'}` },
				)
				.setURL(response.html_url)
				.setThumbnail(response.avatar_url)
				.setFooter('AcroNoid', 'https://images-ext-1.discordapp.net/external/4GdcuxsEqxEKLyL0lhvak9qa372gGtm62HUGc5n_Vz8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/741709243052326922/1a478aefa9d07edbacb4882d15d34cf8.png')
        		.setTimestamp();

			message.channel.send(embed);
		}
		catch (err) {
			return message.channel.send(
				`${client.emotes.error} User Not Found`,
			);
		}
    }
}

