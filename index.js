const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const token = process.env.token

client.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    client.user.setActivity('bannir').catch(console.error)
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('*kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply("And his name is JOHN CENA! T'es kick https://youtu.be/XgUB3lF9IQA");
        }).catch(err => {
          message.reply("Vous n'avez pas l'autorisation de kick ce membre");
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('vous devez mentionner la personne que vous voulez kick ! Sinon cela ne fonctionnera pas :/.');
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
    
  if (message.content.startsWith('*ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Parce que c\'est pas gentil d\'être méchant !!!!!!! Et n\'oubliez jamais d\'apprendre de vos erreurs! :wink:',
        }).then(() => {
          message.reply("l'utilisateur a bien été banni ! Faut pas faire le malin avec moi!");
        }).catch(err => {
          message.reply("Désolé, tu n'as pas l'autorisation de bannir ce membre");
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('vous devez mentionner la personne que vous voulez bannir ! Sinon cela ne fonctionnera pas :/.');
    }
  }
});

client.login(token);
client.on('message', message => {
    'je suis prêt :)'
})
        
