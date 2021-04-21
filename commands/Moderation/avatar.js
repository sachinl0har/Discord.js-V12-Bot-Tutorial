const Discord = require('discord.js');
const config = require('../../configs/config.json');
const bot = new Discord.Client();
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'avatar',
        description: '',
        aliases: ["av"],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
    let target = message.mentions.members.first() || message.member
    if(!target) return message.reply(`No User Mentioned !`)
   const avembed = new MessageEmbed()
   .setTitle(`AVATAR OF ${target.user.tag}`)
   .setColor(embedcolor)
   .setImage(target.user.displayAvatarURL({dynamic : true , size: 4096 ,format:"png"}))
   .setFooter(`Requested by ${message.author.tag}`)
   .setTimestamp()
   
    message.channel.send(avembed)
    }
}

