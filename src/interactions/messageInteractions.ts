import { discordClient } from "../api/discordClient";

discordClient.on("interactionCreate", (interaction) => {
  // If not a slash command no-op
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey wazzup, Powpow is now online!");
  }
});
