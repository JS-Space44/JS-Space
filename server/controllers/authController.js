const db = require('../models/model');

const authController = {};

//cookies dont seem to set with the hash router  prob need to have auth all handled by backend

authController.setCookie = (req, res, next) => {
  res.cookie('test', 'cookie');
  console.log('setCookie()');
  return next();
};

authController.checkCookie = (req, res, next) => {
  console.log('req.cookies', req.cookies);
  return next();
};

module.exports = authController;
