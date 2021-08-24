const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');

//cookies dont seem to set with hashrouter, prob need to have auth all handled by backend

router.get(
  '/',
  authController.setCookie,
  authController.checkCookie,
  (req, res) => {
    return res.sendStatus(200);
  }
);

router.post(
  '/signup',
  authController.bCrypt,
  authController.createUser,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

router.post(
  '/login',
  authController.loginUser,
  authController.startSession,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
