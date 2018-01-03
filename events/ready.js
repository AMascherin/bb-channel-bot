module.exports = async client => {
  //1s wait to allow the ready event to become actually ready
  await client.wait(1000);

  // This event will run if the bot starts, and logs in, successfully.
  console.log(`BB-bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setStatus("dnd");
  client.user.setPresence({
	game: {
		name: `Fate/Extra CCC`,
		type: 0
    }
   });

}
