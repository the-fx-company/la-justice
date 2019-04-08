const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const token = process.env.token

client.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    client.user.setActivity('bannir').catch(console.error)
});
client.on('message', message => {
  if (message.content === '*help') {
    const embed = new RichEmbed()
      .setTitle('*help')
      .setColor(0xFF0000)
      .setDescription('affiche les commandes d\'aide (comme si tu le savais pas FDP)');
    message.channel.send(embed);
      .setTitle('kick')
      .setColor(0xFF0000)
      .setDescription('expulse la personne mentionné (sheh connard !)');
    message.channel.send(embed);
      .setTitle('ban')
      .setColor(0xFF0000)
      .setDescription('banni la personne metionné (putain, c\'est un mot transparent, tu devarais le savoir quand même)');
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('*kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('Sheh, t\'es kick');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('Tu dois mentionner la personne que tu veux kick !');
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
          reason: 'Parce que c\'est pas gentil d\'être méchant !!!!!!!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('L\'utilisateur a bien été banni !');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('Tu dois mentionner la personne que tu veux bannir !');
    }
  }
});

client.login(token);
