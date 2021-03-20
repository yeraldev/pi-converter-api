const { Router } = require('express');
const router = Router();

const { getRates } = require('../controllers/rates.controllers');

router.get('/', getRates);

module.exports = router;
