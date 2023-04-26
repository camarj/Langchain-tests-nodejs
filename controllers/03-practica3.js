const { OpenAI } = require('langchain/llms/openai');
const { initializeAgentExecutorWithOptions } = require('langchain/agents');
const { SerpAPI } = require('langchain/tools');
const { Calculator } = require('langchain/tools/calculator');

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: 'Austin,Texas,United States',
    hl: 'en',
    gl: 'us',
  }),
  new Calculator(),
];

const getNameBussines3 = async () => {
  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: 'zero-shot-react-description',
  });
  console.log('Loaded agent.');

  const input =
    "Who is Olivia Wilde's boyfriend?" +
    ' What is his current age raised to the 0.23 power?';
  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });

  console.log(`Got output ${result.output}`);
};

module.exports = { getNameBussines3 };
