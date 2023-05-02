const { Router } = require('express');

const { chatControllerMemory } = require('../controllers/UseCases/ChatWithMemory');
const { run } = require('../controllers/UseCases/ChatWithEmbedding');

const router = Router();

router.post('/', chatControllerMemory);
router.post('/embedding', run);

module.exports = router;
