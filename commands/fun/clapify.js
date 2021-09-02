const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'clapify',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        ":x: Please provide valid text."
      );
    }

    let text;
    const txt = args.join(" ");
    if (/\s/.test(txt)) {
      text = args.join(" 👏 ");
    } else {
      text = args
        .join(" ")
        .split("")
        .join(" 👏 ");
    }
    message.channel.send(`${text} 👏`);
    }
}

