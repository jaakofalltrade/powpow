import { discordClient } from "./api/discordClient";
import { ask } from "./events/ask";
import { image } from "./events/image";
import { DiscordCommands } from "./models/DiscordCommands";
import { getOpenaiAnswer } from "./openai/getOpenaiAnswer";
import { getChatCompletionMessage } from "./utils/getChatCompletionMessage";
import { getMessageHistory } from "./utils/getMessageHistory";
import { serverConfig } from "./utils/serverConfig";

discordClient.on("interactionCreate", async (interaction) => {
  // If not a slash command no-op
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case DiscordCommands.HEY:
      interaction.reply("Hello!");
      break;
    case DiscordCommands.ASK:
      ask({ interaction });
      break;
    case DiscordCommands.IMAGE:
      image({ interaction });
      break;
    default:
      interaction.reply("Sorry I do not understand what you are saying.");
  }
});

discordClient.on("ready", (res) => {
  console.log(`${res.user.tag} is now online!`);
});

discordClient.login(serverConfig.token);
