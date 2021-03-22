const { Router } = require('express');
const router = Router();

const { getCurrencies } = require('../controllers/currencies.controllers');

router.get('/', getCurrencies);

module.exports = router;
