require("dotenv").config();
import { Env } from "../models/Env";
import { ServerConfig } from "../models/ServerConfig";

const env: Env = (process.env.ENV as Env.PROD) ?? Env.DEV;

const devConfig: ServerConfig = {
  token: process.env.TOKEN ?? "",
  guild_id: process.env.GUILD_ID ?? "",
  client_id: process.env.CLIENT_ID ?? "",
  openai_api_key: process.env.OPENAI_API_KEY ?? "",
};

const prodConfig: ServerConfig = {
  token: "",
  guild_id: "",
  client_id: "",
  openai_api_key: "",
};

export const serverConfig = env === Env.PROD ? prodConfig : devConfig;
