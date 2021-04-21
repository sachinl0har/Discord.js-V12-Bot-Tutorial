const Discord = require('discord.js');
const config = require('../../configs/config.json');
const bot = new Discord.Client();
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'embed',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
    let content = args.join(' ');
if(!content) return message.reply(`Please Specify Something To Embed !`)  

const embedname = new Discord.MessageEmbed()
.setDescription(content)
.setColor(embedcolor)
.setFooter(`REQUESTED BY ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
.setTimestamp();
message.channel.send(embedname)
    }
}

