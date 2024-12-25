import { Client, Interaction } from 'discord.js';

export const handleInteraction = async (client: Client, interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) {
    console.warn(`Command not found: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
    console.log(`Executed command: ${interaction.commandName}`);
  } catch (error) {
    console.error(`Error executing command: ${interaction.commandName}`, error);
    await interaction.reply({ content: 'There was an error executing this command.', ephemeral: true });
  }
};
