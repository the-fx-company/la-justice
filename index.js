const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('bannir').catch(console.error)
});

bot.on('message', message => {
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
      message.reply('YTu dois mentionner la personne que tu veux kick !');
    }
  }
});

bot.on('message', message => {
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

bot.on('message', message => {
    if (!message.guild) return;
    
    if (message.content.startsWith('*unban')) {
    guild.unban('some user ID')
  .then(user => console.log(`Unbanned ${user.username} from ${guild}`))
  .catch(console.error);
    }
};

bot.login(token);
