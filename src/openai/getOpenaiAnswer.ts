import { openaiClient } from "../api/openaiClient";
import { createChatCompletionMessage } from "./createChatCompletionMessage";
import { getPowpowPersonality } from "./getPowpowPersonality";

export const getOpenaiAnswer = async (args: {
  question: string;
  previousQuestions: string[];
}) => {
  const { question, previousQuestions } = args;
  try {
    const result = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        ...getPowpowPersonality(),
        ...createChatCompletionMessage({
          messages: [...previousQuestions, question],
        }),
      ],
    });
    return result.data.choices[0].message;
  } catch (error) {
    console.error(error);
  }
};
