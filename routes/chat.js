const { Router } = require('express');

const { chatController } = require('../controllers/UseCases/ChatWhitMemory');

const router = Router();

router.post('/', chatController);

module.exports = router;
