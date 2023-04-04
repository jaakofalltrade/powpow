import { ChatCompletionRequestMessage } from "openai";
import { openaiClient } from "../api/openaiClient";
import { getPowpowPersonality } from "./getPowpowPersonality";

export const getOpenaiAnswer = async (args: {
  messages: ChatCompletionRequestMessage[];
}) => {
  const { messages } = args;
  console.log(messages);
  try {
    const result = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [...getPowpowPersonality(), ...messages],
    });
    return result.data.choices[0].message;
  } catch (error) {
    console.error(error);
  }
};
