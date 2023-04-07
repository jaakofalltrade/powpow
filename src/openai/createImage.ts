import { CreateImageRequest } from "openai";
import { openaiClient } from "../api/openaiClient";

export const createImage = async (args: {
  imageRequest: CreateImageRequest;
}) => {
  const result = await openaiClient.createImage({ ...args.imageRequest });
  return result.data.data[0].url;
};
