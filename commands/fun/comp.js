const Discord = require('discord.js');
const config = require('../../configs/config.json');
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: 'compliment',
        description: '',
        aliases: ["comp"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const { compliment } = await fetch(
      "https://complimentr.com/api"
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("New Compliment")
      .setDescription(compliment)
      .setColor("BLUE")
      .setFooter(message.author.username)
      .setTimestamp();

    message.channel.send(embed);
    }
}

