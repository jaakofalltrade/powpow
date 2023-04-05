import { Interaction } from "discord.js";
import { ChatCompletionRequestMessage } from "openai";
import { getChatCompletionMessage } from "./getChatCompletionMessage";

export const getMessageHistory = async (
  interaction: Interaction
): Promise<ChatCompletionRequestMessage[]> => {
  const messageHistory = await interaction.channel?.messages.fetch({
    limit: 10,
  });

  if (!messageHistory) return [];

  const messageHistoryList = [...messageHistory.values()];

  let filteredMessages: ChatCompletionRequestMessage[] = [];

  for (const message of messageHistoryList) {
    if (!message.content || !message.content.length) continue;
    filteredMessages.push(
      getChatCompletionMessage.fromDiscordMessage({ message })
    );
  }

  return filteredMessages.reverse();
};
