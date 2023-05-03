const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);


const DalleGPTTest = async () => { 

const response = await openai.createImage({
  prompt: "A red cat sitting on a couch",
  n: 2,
  size: "256x256",
});

    console.log(response.data)
    
}

module.exports = {DalleGPTTest}