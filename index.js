// Aqui é a Branch principal onde eu coloco o bot para funcionar com todos os códigos
require('dotenv').config();
require('./handlers/tokenVerification');
const { client, openai } = require('./client/client');
const { handleIncomingMessage } = require('./handlers/messageHandler')
const ready = require('./handlers/ready');

ready(client);

client.on('messageCreate', async (message) => {
  try {
    await handleIncomingMessage(message, client, openai);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

client.login(process.env.TOKEN);