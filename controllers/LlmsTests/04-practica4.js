const { OpenAI } = require('langchain/llms/openai');
const { BufferMemory } = require('langchain/memory');
const { ConversationChain } = require('langchain/chains');

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

const getNameBussines4 = async () => {
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log(res1);

  const res2 = await chain.call({ input: "What's my name?" });
  console.log(res2);
};

module.exports = { getNameBussines4 };
