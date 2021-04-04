const { Router } = require('express');
const router = Router();

const {
  getCurrencies,
  getPi,
  getBtc,
  getVes
} = require('../controllers/currencies.controllers');

router.get('/', getCurrencies);

router.get('/pi', getPi);

router.get('/btc', getBtc);

router.get('/ves', getVes);

module.exports = router;
