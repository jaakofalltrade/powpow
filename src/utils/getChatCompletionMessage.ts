import { CommandInteractionOption, Message } from "discord.js";
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import { isMessageSentByBot } from "./isMessageSentByBot";
import { cleanMessageText } from "./cleanMessageText";

const fromDiscordMessage = (args: {
  message: Message;
}): ChatCompletionRequestMessage => {
  const { message } = args;
  if (isMessageSentByBot.fromDiscordMessage(message)) {
    return {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: message.content,
    };
  }
  return {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: cleanMessageText(message.content),
  };
};

const fromDiscordInteractionOption = (args: {
  option: CommandInteractionOption;
}): ChatCompletionRequestMessage => {
  const { option } = args;

  const role = isMessageSentByBot.fromDiscordInteractionOption(option)
    ? ChatCompletionRequestMessageRoleEnum.Assistant
    : ChatCompletionRequestMessageRoleEnum.User;

  return {
    role,
    content: option.value as string,
  };
};

export const getChatCompletionMessage = {
  fromDiscordMessage,
  fromDiscordInteractionOption,
};
