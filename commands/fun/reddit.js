const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const superagent = require('superagent')

module.exports = {
    config: {
        name: 'reddit',
        description: 'Shows pic from Reddit',
        aliases: ["reddit"],
        usage: '<subreddit>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        if(!args[0]) return message.reply("You didn't provide a SubReddit Name!")
        let {body} = await superagent
        .get(`https://www.reddit.com/r/${args}.json?sort=top&t=week`)
        .query({limit: 800});
    
        var allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if(!allowed.length) return message.reply("We are running out of  memes. 😂😂😂")
        var randomNumber = Math.floor(Math.random() * allowed.length)
        var embed = new MessageEmbed()
        .setColor(config.embedcolor)
        .setTitle(allowed[randomNumber].data.title)
        .setDescription(`**Author** - ${allowed[randomNumber].data.author}`)
        .setImage(allowed[randomNumber].data.url)
        .addField('Information: ', "• **UpVotes:** " + allowed[randomNumber].data.ups + " / • **Comments:** " + allowed[randomNumber].data.num_comments)
        .setTimestamp()
        .setFooter('AcroNoid', 'https://images-ext-1.discordapp.net/external/4GdcuxsEqxEKLyL0lhvak9qa372gGtm62HUGc5n_Vz8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/741709243052326922/1a478aefa9d07edbacb4882d15d34cf8.png')
        return message.channel.send(embed)

        
    }
}

