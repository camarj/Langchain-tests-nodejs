const { ConversationChain } = require('langchain/chains');
const { ChatOpenAI } = require('langchain/chat_models/openai');
const {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} = require('langchain/prompts');
const { BufferMemory } = require('langchain/memory');

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
  temperature: 0,
});

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'Eres un especialista en marketing digital'
  ),
  new MessagesPlaceholder('history'),
  HumanMessagePromptTemplate.fromTemplate('{input}'),
]);

const chain = new ConversationChain({
  memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
  prompt: chatPrompt,
  llm: chat,
});

const chatController = async (req, res) => {
  const body = req.body;
  const respuesta = await chain.call({
    input: body.input,
  });
  res.json({
    respuesta,
    body,
  });
};

module.exports = { chatController };
