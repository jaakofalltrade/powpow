import { Interaction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Ask our bot Powpow to answer your question.")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("Questions to our Powpow.")
        .setRequired(true)
    ),
  async execute(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;
    await interaction.reply("wow");
  },
};
