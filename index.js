var Discord = require ('discord.js');
const SpoilerBot = require('discord-spoiler-bot');
const client = new Discord.Client();

const {promisify} = require ("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

const client = new Discord.Client();
//Useful functions for the client
require ("./utils/function.js")(client);


client.commands = new Enmap();
client.aliases = new Enmap();

//client.settings = new Enmap({provider: new EnmapLevel({name:settings})});
//client.events = new Enmap();

const init = async () => {
    const cmdFiles = await readdir("./commands/");
    //Loading commands
    cmdFiles.forEach (f=>{
        if(!f.endsWith(".js")) return;
        const response = client.loadCommand(f);
        if(response) console.log(response);
    });

    // Then we load events, which will include our message and ready event.
    const evtFiles = await readdir("./events/");
    evtFiles.forEach(file => {
      const eventName = file.split(".")[0];
      const event = require(`./events/${file}`);
      // This line is awesome by the way. Just sayin'.
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });

    //Client login  
    client.login(process.env.BOT_TOKEN);

};


init();


//Spoiler Bot implementation
let config = {
    client: client,
    markAllowAll: false
};

let bot = new SpoilerBot(config);
bot.connect();
