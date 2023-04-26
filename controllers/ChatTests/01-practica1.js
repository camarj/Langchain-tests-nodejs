const { ChatOpenAI } = require('langchain/chat_models/openai');
const { HumanChatMessage, SystemChatMessage } = require('langchain/schema');

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});

const chatTest1 = async () => {
  const response = await chat.call([new HumanChatMessage('Hola como estas?')]);

  console.log(response);
};

module.exports = { chatTest1 };
