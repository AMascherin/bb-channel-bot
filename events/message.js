module.exports = (client,message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.id === client.user.id || message.author.bot) return;

  //Ignoring also every message not starting with the prefix
  let prefix = "-";  //TODO:Configuration file
  if (!message.content.startsWith(prefix)) return;

  //Separating command name and args
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Checking if the command is valid or if it has aliases
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if(!cmd) return;

  //Find the message permission level
  const level = client.permlevel(message);
  //For future implementation
  message.author.permLevel = level;

//  console.log(' ${message.author.username} ${message.author.id}) ran command ${cmd.help.name} ');
  cmd.run(client, message, args, level);

};
