const db = require('../models/model');
const Bcrypt = require('bcryptjs');

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
  let authObj = {};
  const authQuery = {
    text: `SELECT * FROM "User" WHERE Email=$1`,
  };
  const value = [email];
  db.query(authQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    authObj = qres.rows[0];
    console.log(authObj);

    if (
      // authObj.user_name === user_name &&
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

// takes a JSON object with email, password, user_name
authController.createUser = (req, res, next) => {
  const { user_name, email, password } = req.body;
  console.log(req.body);
  res.locals.user_name = user_name;
  res.locals.email = email;
  res.locals.password = password;
  //res.locals.user_id = user_id;
  const signUpQuery = {
    text: `INSERT INTO "User"(user_name, email, password) 
    VALUES($1, $2, $3)`,
  };
  const value = [user_name, email, password];
  console.log('value', value);

  db.query(signUpQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
    return next();
  });
};

authController.bCrypt = async function (req, res, next) {
  try {
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
