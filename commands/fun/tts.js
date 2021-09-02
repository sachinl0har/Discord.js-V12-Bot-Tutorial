const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'tts',
        description: 'Says your message through bot',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        if(!args[0]) return message.channel.send('Please provide some text');
        if(!message.member.voice.channel) return message.channel.send({embed:{
         color: '#ff0000',
         description: "Please Join A Voice Channel"}})
        let msg;
        let guild = message.guild;
        message.delete()
               let uni = message.member.voice.channel;
       await uni.join().then(connection => {
            msg = args.join(" ");
            message.channel.send(msg,{
              tts:true
            })
             
         });
          // guild.me.voice.channel.leave()
       }
       
    }