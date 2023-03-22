import { Client, IntentsBitField } from "discord.js";

export const discordClient = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

discordClient.on("ready", (res) => {
  console.log(`${res.user.tag} is now online!`);
});
