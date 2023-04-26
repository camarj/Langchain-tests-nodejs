const { ChatOpenAI } = require('langchain/chat_models/openai');
const { HumanChatMessage, SystemChatMessage } = require('langchain/schema');

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});

const chatTest2 = async () => {
  response = await chat.call([
    new SystemChatMessage(
      'You are a helpful assistant that translates English to French.'
    ),
    new HumanChatMessage('Translate: I love programming.'),
  ]);

  console.log(response);
};

module.exports = { chatTest2 };
