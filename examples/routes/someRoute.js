const express = require('express');
const { someController } = require('../controllers/some-controller/someController');

const router = express.Router();

router.get('/', someController);

module.exports = router;
