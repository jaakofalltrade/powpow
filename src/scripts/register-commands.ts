import { serverConfig } from "../utils/serverConfig";
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
  {
    name: "ask",
    description: "Connects to ChatGPT to answer your question.",
  },
];

const rest = new REST({ version: "10" }).setToken(serverConfig.token ?? "");

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        serverConfig.client_id,
        serverConfig.guild_id
      ),
      { body: commands }
    );
    console.log("Slash commands were registered successfully!");
  } catch (error) {
    console.error(error);
  }
})();
