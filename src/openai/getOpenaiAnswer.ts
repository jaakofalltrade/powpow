import {
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
} from "openai";
import { openaiClient } from "../api/openaiClient";
import { getPowpowPersonality } from "./getPowpowPersonality";

export const getOpenaiAnswer = async (args: {
  messages: ChatCompletionRequestMessage[];
}): Promise<ChatCompletionResponseMessage | undefined> => {
  const { messages } = args;
  console.log(messages);
  try {
    const result = await openaiClient.createChatCompletion({
      model: "gpt-4-0613",
      messages: [...getPowpowPersonality(), ...messages],
    });
    console.log(result.data.model);
    return result.data.choices[0].message;
  } catch (error) {
    console.error(error);
  }
};
