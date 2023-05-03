
const { OpenAIEmbeddings } = require('langchain/embeddings/openai');
const { createClient } = require('@supabase/supabase-js');
const { SupabaseVectorStore } = require('langchain/vectorstores/supabase');
const { OpenAI } = require('langchain/llms/openai');
const { RetrievalQAChain } = require('langchain/chains');
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { TextLoader } = require("langchain/document_loaders/fs/text");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");
const {PromptTemplate} = require("langchain/prompts");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

const dbConfig = {
  client,
  tableName: 'documents',
  queryName: 'match_documents',
};

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: OPENAI_API_KEY,
});

const loadDocuments = async () => {
  const loader = new DirectoryLoader("../../document_loaders/data", {
    '.txt': (path) => new TextLoader(path)
  });
  const textSplitter = new RecursiveCharacterTextSplitter();
  const docs = await loader.loadAndSplit(textSplitter);
  return docs;
}
const embedDocuments = async docs => {
  console.log('Creando embeddings...');

  await client.from('documents').delete();
  const vectorStore = await SupabaseVectorStore.fromDocuments(
    docs,
    embeddings,
    dbConfig
  );
  console.log('Embeddings creados en supabases');
  return vectorStore;
};

const llm = new OpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
});

const chatControllerEmbeddings = async (req, res) => {
    // const docs = await loadDocuments();

    // const store = await embedDocuments(docs);
  const store = await SupabaseVectorStore.fromExistingIndex(
    embeddings,
    dbConfig
  );

  const query = 'Hola como estas quie eres?';
  const template = `Eres un asistente amable y servicial. Que me puede ayudar respondiendo preguntas sobre Venezuela. Si te preguntan quien eres indicas que eres un asistente especialista en venezuela.
  Respuesta en: {language}
  Pregunta: {query}`;

  const prompt = new PromptTemplate({template, inputVariables: ['query', 'language']});

  console.log('Guardando store');

  const chain = RetrievalQAChain.fromLLM(llm, store.asRetriever());

  const respuesta = await chain.call({
    query: await prompt.format({query, language: 'spanish'}),
  });

  console.log(respuesta.text);
  res.json({
    respuesta: respuesta.text
  });

};

module.exports = { chatControllerEmbeddings };
