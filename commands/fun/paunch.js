const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");


module.exports = {
    config: {
        name: 'punch',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    let user = message.mentions.users.first () || message.author;
    let target = message.author.id == user.id ? "themselfs": user.username ;
    
    let data = await Random.getAnimeImgURL("punch");
    
    let embed = new Discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setTitle(`${message.author.username} Punches ${target}`)
    .setDescription(`[Click here if the image failed to load](${data})`)
    .setFooter(`${message.author.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
    }
}

