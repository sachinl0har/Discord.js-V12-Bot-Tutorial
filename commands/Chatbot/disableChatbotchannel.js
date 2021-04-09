const Discord = require('discord.js');
const config = require('../../configs/config.json');
const emote = require('../../configs/emotes.json')
const db = require('quick.db')

module.exports = {
    config: {
        name: 'disablechatbotchannel',
        description: 'Disables a ChatBot Channel',
        aliases: ["disablechatbotchannel"],
        usage: '<channel>',
        accessableby: "MANAGE_GUILD",
    },
    run: async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emote.error} Missing Permissions!`
        )
    try {
        let a = db.fetch(`chatbot_${message.guild.id}`)

        if (!a) {
            return message.channel.send(` ${emote.error} Cannot Disable `
        )
        } else {
            let channel = message.guild.channels.cache.get(a)
            db.delete(`chatbot_${message.guild.id}`)
    
            message.channel.send(`${emote.verified} ChatBot Disabled! \`${channel.id}\``
        )
        }
        return;
    } catch {
        return message.channel.send(`${emote.error} Missing Permissions`)
    }

    }
};

