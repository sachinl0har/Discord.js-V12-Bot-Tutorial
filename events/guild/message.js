const config = require('../../configs/config.json');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');

module.exports = async (client, message) => {
    let prefix = config.prefix
    try{
        if (message.author.bot || message.channel.type === "dm") return;

        if((message.content === "<@767223932884353044>") || (message.content === "<@!767223932884353044>")){
      message.channel.send({ embed:{
        title: `AcroNoid`,
        description: `My Prefix is \`>\` \n\n [WEBSITE](https://www.acronoid.ml) | [SUPPORT SERVER](https://discord.com/invite/Xqw2akR) | [VOTE ACRO](https://top.gg/bot/767223932884353044/vote)`,
        color: '#ff0000'
      }})
        }

        if(!message.content.startsWith(prefix)) return;

    
        let timeout = 60 * 1000
  
        let myDaily = await db.get(`timeout`)
    
        if(!db.has(`${message.guild.id}.${message.author.id}.messageCount`)) {
            db.set(`${message.guild.id}.${message.author.id}.messageCount`, 1)
        } else {
            db.add(`${message.guild.id}.${message.author.id}.messageCount`, 1)
        }
    
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        var commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
        if (commandfile) commandfile.run(client, message, args);

        const commandembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('A Command was used!')
			.addField('Command user :', `\`\`\`${message.author.tag}\`\`\``)
			.addField('Command user ID :', `\`\`\`${message.author.id}\`\`\``)
			.addField('Command ran :', `\`\`\`${cmd}\`\`\``)
			.addField('Guild name :', `\`\`\`${message.guild.name}\`\`\``)
			.addField('Guild ID :', `\`\`\`${message.guild.id}\`\`\``);
		client.channels.cache.get("823471879225344010").send(commandembed);
        
    } catch (error) {
        await client.channels.cache.get("823471954262098000").send({embed:{
          description: error,
          color: 'RED',
        }});
    }

    
   

};
