const { ChatOpenAI } = require('langchain/chat_models/openai');
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

const chatTest4 = async () => {
  const responseA = await chat.generatePrompt([
    await translationPrompt.formatPromptValue({
      input_language: 'English',
      output_language: 'French',
      text: 'I love programming.',
    }),
  ]);

  console.log(responseA.generations);
};

module.exports = { chatTest4 };
