import { Configuration, OpenAIApi } from "openai";
import { serverConfig } from "../utils/serverConfig";

const configuration = new Configuration({
  apiKey: serverConfig.openai_api_key,
});

export const openaiClient = new OpenAIApi(configuration);
