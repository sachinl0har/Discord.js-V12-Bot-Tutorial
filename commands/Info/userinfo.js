const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'userinfo',
        description: '',
        aliases: ["uinfo", "whois"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
     let target = message.guild.members.cache.get(message.mentions.users.first()) || bot.users.cache.get(args[1]) || message.author;
if(!target) return message.reply(`No User Mentioned !`)
    let userinfoembed = new Discord.MessageEmbed()
    .setColor(embedcolor)
    .setTitle(`USERINFO COMMAND !`)
    .setDescription(`:black_square_button: Bot : ${target.bot} \n :black_square_button: USER ID : ${target.id} \n :black_square_button: Tag : ${target.tag}\n :black_square_button: Joined Discord : ${target.createdAt} \n `)
    .setThumbnail(target.displayAvatarURL({dynamic:true}));


message.channel.send(userinfoembed)
    }
}

