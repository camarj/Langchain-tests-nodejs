const { Router } = require('express');

const { chatController } = require('../controllers/UseCases/ChatWithMemory');

const router = Router();

router.post('/', chatController);

module.exports = router;
