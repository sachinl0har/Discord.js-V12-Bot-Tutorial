const Discord = require('discord.js');
const config = require('../../configs/config.json');
const discord = require("discord.js");
const { Random } = require("something-random-on-discord");



module.exports = {
    config: {
        name: 'cry',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    let data = await Random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setDescription(`[Click here if the image failed to load](${data})`)
    .setFooter(message.author.username)
    .setColor("RANDOM")
    .setTitle(`${message.author.username} is crying!`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
