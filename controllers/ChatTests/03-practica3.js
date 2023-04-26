const { ChatOpenAI } = require('langchain/chat_models/openai');
const { HumanChatMessage, SystemChatMessage } = require('langchain/schema');

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});

const chatTest3 = async () => {
  const responseC = await chat.generate([
    [
      new SystemChatMessage(
        'You are a helpful assistant that translates English to French.'
      ),
      new HumanChatMessage(
        'Translate this sentence from English to French. I love programming.'
      ),
    ],
    [
      new SystemChatMessage(
        'You are a helpful assistant that translates English to French.'
      ),
      new HumanChatMessage(
        'Translate this sentence from English to French. I love artificial intelligence.'
      ),
    ],
  ]);

  console.log(responseC.generations);
};

module.exports = { chatTest3 };
