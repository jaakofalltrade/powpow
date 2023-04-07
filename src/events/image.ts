import { ChatInputCommandInteraction } from "discord.js";
import { createImage } from "../openai/createImage";
import { createImageRequest } from "../openai/createImageRequest";

export const image = async (args: {
  interaction: ChatInputCommandInteraction;
}) => {
  const { interaction } = args;
  const option = interaction.options.get("image");
  if (!option?.value) return;
  interaction.reply(`${interaction.member?.user}: "${option.value}"`);
  const imageRequest = createImageRequest(`${option.value}`);
  const image_url =
    (await createImage({ imageRequest })) ??
    "https://media.tenor.com/qsthhHhdjsQAAAAC/error-windows.gif";

  interaction.channel?.send(image_url);
};
