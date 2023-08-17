// Definindo o que fazer quando o bot estiver logado
module.exports = (client) => {
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
      const channel = client.channels.cache.get(process.env.CHAT_BOT_CHANNEL);
    if (channel) {
    channel.send('Olá, Sou um bot para dúvidas. Você pode escrever suas dúvidas aqui e eu irei respondê-las. Eu ignoro mensagens que começam com "!, /".').catch(console.error);
  }});
  };