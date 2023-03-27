import { serverConfig } from "../utils/serverConfig";
import { ApplicationCommandOptionType, REST, Routes } from "discord.js";

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
  {
    name: "ask",
    description: "Ask our bot Powpow to answer your question.",
    options: [
      {
        name: "question",
        description: "Question to ask Powpow.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
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
