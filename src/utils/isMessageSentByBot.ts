import { CommandInteractionOption, Message } from "discord.js";

export const fromDiscordMessage = (message: Message): boolean => {
  return ![...message.mentions.users.keys()].length;
};

const fromDiscordInteractionOption = (
  option: CommandInteractionOption
): boolean => {
  return option.user?.bot ?? false;
};

export const isMessageSentByBot = {
  fromDiscordMessage,
  fromDiscordInteractionOption,
};
