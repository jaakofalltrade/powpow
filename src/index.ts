import { discordClient } from "./api/discordClient";
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
      const option = interaction.options.get("question");
      if (!option?.value) return;
      const messageHistory = await getMessageHistory(interaction);
      interaction.reply(`${interaction.member?.user} said "${option.value}"`);

      interaction.channel?.sendTyping();
      const openaiAnswer = await getOpenaiAnswer({
        messages: [
          ...messageHistory,
          getChatCompletionMessage.fromDiscordInteractionOption({
            option: option,
          }),
        ],
      });
      if (!openaiAnswer) return;
      console.log(openaiAnswer.content);
      interaction.channel?.send(openaiAnswer?.content);
      break;
    default:
      interaction.reply("Sorry I do not understand what you are saying.");
  }
});

discordClient.on("ready", (res) => {
  console.log(`${res.user.tag} is now online!`);
});

discordClient.login(serverConfig.token);
