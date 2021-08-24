const express = require('express');

const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
