const textToSpeech = require('@google-cloud/text-to-speech');

require('dotenv').config();

const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

const convertTextToMp3 = async() => {

    const text = 'Hola, mi nombre es Maria, soy un asistente virtual que te ayudara a encontrar lo que necesitas.';

    const request = {
        input: { text: text },
        voice: { languageCode: 'es-US', ssmlGender: 'FEMALE' },
        audioConfig: { audioEncoding: 'MP3' },
    }

    const [response] = await client.synthesizeSpeech(request);

    const writeFile = util.promisify(fs.writeFile);

    await writeFile('output.mp3', response.audioContent, 'binary'); 

    console.log('Audio completado en el archivo: output.mp3');
}

convertTextToMp3()