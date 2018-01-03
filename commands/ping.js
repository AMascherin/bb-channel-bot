exports.run = async (client,message,args,level) => {
  const msg = await message.channel.send("Ping");
  msg.edit('Pong!');
};

exports.conf = {
  enabled:true,
  guildOnly:false,
  aliases: [],
  permLevel:"User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "Ping pong with BB!",
  usage: "ping"  
}
