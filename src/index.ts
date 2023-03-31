import { serverConfig } from "./utils/serverConfig";
import { discordClient } from "./api/discordClient";
import { DiscordCommands } from "./models/DiscordCommands";
import { getOpenaiAnswer } from "./openai/getOpenaiAnswer";
import { getMessageHistory } from "./utils/getMessageHistory";

discordClient.on("interactionCreate", async (interaction) => {
  // If not a slash command no-op
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case DiscordCommands.HEY:
      interaction.reply("Hello!");
      break;
    case DiscordCommands.ASK:
      const question = interaction.options.get("question");
      if (!question?.value) return;
      const messageHistory = await getMessageHistory(interaction);
      interaction.reply(`${interaction.member?.user}: "${question.value}"`);

      interaction.channel?.sendTyping();
      const openaiAnswer = await getOpenaiAnswer({
        question: question.value as string,
        previousQuestions: messageHistory,
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
