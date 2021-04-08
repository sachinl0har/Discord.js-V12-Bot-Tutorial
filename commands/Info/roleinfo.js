const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'roleinfo',
        description: '',
        aliases: ["rinfo"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    let therole = message.mentions.roles.first();
if(!therole) return message.reply(`No Role Mentioned !`)

let theroleembed = new Discord.MessageEmbed()
.setTitle(`Roleinfo OF  __${therole.name}__ ✔️ `)
.setColor('RANDOM')
.addField(`Name`,`${therole.name}`)
.addField(`Role Id`,`${therole.id}`)
.addField(`Color`,`${therole.hexColor}`)
.addField(`Hoisted`,`${therole.hoist}`)
.setTimestamp()

message.channel.send(theroleembed);
    }
}

