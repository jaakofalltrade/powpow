import { ChatCompletionRequestMessage } from "openai";

export const createChatCompletionMessage = (args: {
  messages: string[];
}): ChatCompletionRequestMessage[] => {
  return args.messages.map((message) => {
    return {
      role: "user",
      content: message,
    };
  });
};
