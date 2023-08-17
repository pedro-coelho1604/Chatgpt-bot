// Meio de verificação para garantir que tem todas as chaves no ".env"
const dotenv = require('dotenv');
dotenv.config();

const requiredKeys = ['TOKEN', 'OPENAI_API_KEY', 'CHAT_BOT_CHANNEL'];
const missingKeys = requiredKeys.filter((key) => !process.env[key]);

// Adicionando uma condicional que avisa pelo Node se está faltando alguma chave
if (missingKeys.length > 0) {
  console.log(`Missing required keys in .env file: ${missingKeys.join(', ')}`);
  process.exit(1);
}