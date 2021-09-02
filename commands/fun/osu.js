const Discord = require('discord.js');
const config = require('../../configs/config.json');
const osu = require('node-osu');
const { MessageEmbed } = require('discord.js');
const api = new osu.Api("85842912bd27a41e4474c36868bd9b92605c61b0" , {
// END OF OSU API KEY
    notFoundAsError: true,
    completeScores: false 
})

module.exports = {
    config: {
        name: 'osu',
        description: 'Shows information about osu player',
        aliases: ["osu"],
        usage: '<query>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        let username = args[0]
  
  
if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')

api.getUser({u: username}).then(user => {
const osu = new Discord.MessageEmbed()
.setTitle(`User Osu Search System`)
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor(config.embedcolor)
.addField('》`Nickname:`', user.name)
.addField('》`PP:`', Math.round(user.pp.raw))
.addField('》`Rank:`', user.pp.rank)
.addField('》`Level:`', Math.round(user.level))
.addField('》`Score:`', user.scores.ranked)
.addField('》`Country:`', user.country)
.addField('》`Country Rank:`', user.pp.countryRank)
.addField('》`Playcount:`', user.counts.plays)
.addField('》`Accuracy:`', `${user.accuracyFormatted}`)
.setTimestamp()
    .setFooter('AcroNoid', 'https://images-ext-1.discordapp.net/external/4GdcuxsEqxEKLyL0lhvak9qa372gGtm62HUGc5n_Vz8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/741709243052326922/1a478aefa9d07edbacb4882d15d34cf8.png')
console.log(user)
message.channel.send(osu)
})

    }
}

