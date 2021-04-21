const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**AcroNoid Bot** \n\n**👋 Hey!\n Do you want to Invite me? [Click Here](https://discord.com/oauth2/authorize?client_id=767223932884353044&scope=bot&permissions=2147483647) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/Xqw2akR)**`,
      true
    )
    .addField(
      "Vote Link:",
      `**[Click Here!](https://top.gg/bot/767223932884353044/vote)**`,
      true
    )
    .setTimestamp()
    .setFooter('AcroNoid')
    .setColor(embedcolor);
    message.channel.send(embed)
    }
}

