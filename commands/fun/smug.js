const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: 'lewd',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const data = await fetch("https://nekos.life/api/v2/img/lewd").then((res) =>
      res.json()
    );

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
    }
}

