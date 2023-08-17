// Importando as classes de permissão do bot e sua interação com  chattgpt
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

// Definindo as permissões para que o bot acesse informações e eventos relacionados a guildas, membros de guildas e mensagens.
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
// Criando uma instância da classe "openai"
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//Exportando os arquivos desta pasta para outras
module.exports = { client, configuration, openai };