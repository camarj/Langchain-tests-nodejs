const { ChatOpenAI } = require('langchain/chat_models/openai');
const { LLMChain } = require('langchain/chains');
const {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} = require('langchain/prompts');

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a helpful assistant that translates {input_language} to {output_language}.'
  ),
  HumanMessagePromptTemplate.fromTemplate('{text}'),
]);

const chain = new LLMChain({
  prompt: translationPrompt,
  llm: chat,
});

const chatTest5 = async () => {
  const responseB = await chain.call({
    input_language: 'English',
    output_language: 'French',
    text: 'I love programming.',
  });

  console.log(responseB);

  const responseD = await chain.call({
    input: 'hi from London, how are you doing today',
  });

  const responseE = await chain.call({
    input: 'Do you know where I am?',
  });

  console.log(responseE);
};

module.exports = { chatTest5 };
