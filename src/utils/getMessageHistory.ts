import { Interaction } from "discord.js";
import { cleanMessageText } from "./cleanMessageText";

export const getMessageHistory = async (
  interaction: Interaction
): Promise<string[]> => {
  const messageHistory = await interaction.channel?.messages.fetch({
    limit: 25,
  });

  if (!messageHistory) return [];

  const messageHistoryList = [...messageHistory.values()];

  let filteredMessages: string[] = [];

  for (const item of messageHistoryList) {
    console.log(item.content);
    if (![...item.mentions.users.keys()].length) continue;
    filteredMessages.push(item.content);
  }
  filteredMessages.reverse();
  return cleanMessageText({ messageHistory: filteredMessages });
};
