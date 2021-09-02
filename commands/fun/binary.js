const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const axios = require('axios')

module.exports = {
    config: {
        name: 'binary',
        description: 'Shows your text in Binary Format',
        aliases: ["binary"],
        usage: '<text>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        
        const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
    response = await axios.get(url);
    data = response.data;
  } catch (e) {
    return message.channel.send(`An error occured, please try again!`);
  }

  const embed = new MessageEmbed()
    .setTitle("Text to Binary")
    .setThumbnail(
      "https://png.pngtree.com/png-clipart/20200225/original/pngtree-binary-code-and-magnifying-glass-isometric-icon-png-image_5252004.jpg"
    )

    .setDescription("**Binary Code** - `" + data.binary + "`")
    .setTimestamp()
    .setFooter(
      'AcroNoid', 'https://images-ext-1.discordapp.net/external/4GdcuxsEqxEKLyL0lhvak9qa372gGtm62HUGc5n_Vz8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/741709243052326922/1a478aefa9d07edbacb4882d15d34cf8.png')
    .setColor(config.embedcolor);

  await message.channel.send(embed);

    }
}

