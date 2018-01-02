var Discord = require ('discord.js');
const SpoilerBot = require('discord-spoiler-bot');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setStatus("dnd");
  client.user.setPresence({
	game: {
		name: `Fate/Extra CCC`,
		type: 0
    }
   });
});


let prefix = "$";
client.on('message', async message => {
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.id === client.user.id || message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

   switch(cmd) {
      case 'ping':
          message.reply('pong!');
          break;
      case 'help':
          var msg = "Scrivi così il tuo messaggio: \n Descrizione spoiler:spoiler:Testo da nascondere";
          message.reply(msg);
          break;
     }
});




//Spoiler Bot implementation
let config = {
    client: client,
    markAllowAll: false
};

let bot = new SpoilerBot(config);
bot.connect();
