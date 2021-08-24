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

// template for logging in
authController.loginUser = (req, res, next) => {
  const { user_name, email, password } = req.body;
  const authObj = {};
  const authQuery = {
    text: `SELECT * FROM users WHERE email = $1`,
  };
  const value = [email];
  db.query(authQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
    }
    authObj = qres;

    if (
      authObj.user_name === user_name &&
      authObj.password === password &&
      authObj.email === email
    ) {
      res.locals.auth = true;
      return next();
    } else {
      res.locals.auth = false;
      return next();
    }
  });
};

authController.createUser = (req, res, next) => {
  const { user_name, email, password } = req.body;
  res.locals.user_name = user_name;
  res.locals.email = email;
  res.locals.password = password;
  const signUpQuery = {
    text: `INSERT INTO users (user_name, email, password)`,
  };
  const value = [user_name, email, password];
  console.log('value', value);

  db.query(signUpQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
    }
    res.locals = qres;
    return next();
  });
};

module.exports = authController;
