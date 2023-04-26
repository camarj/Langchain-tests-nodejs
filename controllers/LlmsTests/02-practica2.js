const { OpenAI } = require('langchain/llms/openai');
const { PromptTemplate } = require('langchain/prompts');
const { LLMChain } = require('langchain/chains');

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const template = 'What is a good name for a company that makes {product}?';
const prompt = new PromptTemplate({
  template,
  inputVariables: ['product'],
});
const chain = new LLMChain({ llm: model, prompt: prompt });

const getNameBussines2 = async () => {
  const res = await chain.call({ product: 'colorful socks' });
  console.log(res);
};

module.exports = { getNameBussines2 };
