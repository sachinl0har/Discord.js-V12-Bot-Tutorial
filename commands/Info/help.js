const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const { embedcolor } = require("../../configs/config.json");
const { prefix } = require('../../configs/config.json');

module.exports = {
    config: {
        name: "help",
        aliases: [""],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the karma has.",
        accessableby: "everyone"
    },
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setColor(embedcolor)
            .setAuthor(`AcroNoid Commands`, client.user.avatarURL())
            

        if (!args[0]) {

          // Commands here
            

            return message.channel.send(embed)
        } else {
            let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\``))
            command = command.config

            embed.setDescription(stripIndents`**AcroNoid Prefix ${prefix}`**\n
            ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
            ** Description -** ${command.description || "No Description provided."}\n
            ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
            embed.setFooter(`AcroNoid`)

            return message.channel.send(embed)
        }
    }
};
