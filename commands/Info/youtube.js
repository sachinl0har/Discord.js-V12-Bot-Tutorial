const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { YTSearcher } = require('ytsearcher');
const cnf = require('../../configs/config.json');
const searcher = new YTSearcher(cnf.api);
const { embedcolor } = require('../../configs/config.json')

module.exports = {
    config: {
        name: 'youtube',
        description: '',
        aliases: ["yt"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        try {
            if (!args[0]) return message.channel.send("Say Something")
            
            let msg = await message.channel.send("...")
            
            searcher.search(args.join(' ')).then(info => {
              if (!info.first) {
              let embed2 = new Discord.MessageEmbed()
              .setDescription("Search Not Found")
               return msg.edit(embed2);
                }
              let embed = new Discord.MessageEmbed()
              .setTitle("Search result:")
              .setDescription("`First result:` " + info.first.url + " - \n \`\`\`" + info.first.description + "\`\`\`")

              msg.edit(embed);
            });
        
          } catch (err) {
            return message.channel.send("Error 404...")
          }
    }
}
