const { Router } = require('express');

const { chatControllerMemory } = require('../controllers/UseCases/ChatWithMemory');
const { chatControllerEmbeddings } = require('../controllers/UseCases/ChatWithEmbedding');
const { autoGptTest } = require('../controllers/UseCases/AutoGPTTest');
const { WhisperGPTTest } = require('../controllers/UseCases/WhisperGPTest');
const { DalleGPTTest } = require('../controllers/UseCases/DalleGPTTest');

const router = Router();

router.post('/', chatControllerMemory);
router.post('/embedding', chatControllerEmbeddings);
router.post('/autogpt', autoGptTest);
router.post('/whisper', WhisperGPTTest);
router.post('/dalle', DalleGPTTest);

module.exports = router;
