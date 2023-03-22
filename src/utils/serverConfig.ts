require("dotenv").config();
import { Env } from "../models/Env";
import { ServerConfig } from "../models/ServerConfig";

const env: Env = (process.env.ENV as Env.prod) ?? Env.dev;

const devConfig: ServerConfig = {
  token: process.env.TOKEN ?? "",
  guild_id: process.env.GUILD_ID ?? "",
  client_id: process.env.CLIENT_ID ?? "",
};

const prodConfig: ServerConfig = {
  token: "",
  guild_id: "",
  client_id: "",
};

export const serverConfig = env === "PROD" ? prodConfig : devConfig;
