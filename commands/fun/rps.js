const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    config: {
        name: 'rps',
        description: 'RPS game',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
      .setDescription("Add a reaction to one of these emojis to play the game!")
      .setTimestamp(); 

    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
   message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
    
    embed.setDescription("").addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, clientChosen) {
      if (
        (me === "🗻" && clientChosen === "✂") ||
        (me === "📰" && clientChosen === "🗻") ||
        (me === "✂" && clientChosen === "📰")
      ) {
        return "You won!";
      } else if (me === clientChosen) {
        return "It's a tie!";
      } else {
        return "You lost!";
      }
    }
  }
};
