import { ChatInputCommandInteraction } from "discord.js";
import { getMessageHistory } from "../utils/getMessageHistory";
import { getOpenaiAnswer } from "../openai/getOpenaiAnswer";
import { getChatCompletionMessage } from "../utils/getChatCompletionMessage";

export const ask = async (args: {
  interaction: ChatInputCommandInteraction;
}) => {
  const { interaction } = args;
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
};
