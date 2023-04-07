import {
  CreateImageRequest,
  CreateImageRequestResponseFormatEnum,
  CreateImageRequestSizeEnum,
} from "openai";

export const createImageRequest = (prompt: string): CreateImageRequest => {
  return {
    prompt,
    size: CreateImageRequestSizeEnum._512x512,
    n: 1,
    response_format: CreateImageRequestResponseFormatEnum.Url,
  };
};
