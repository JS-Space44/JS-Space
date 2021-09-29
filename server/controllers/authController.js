const config = require('config');
const db = require('../models/model');
const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const authController = {};

authController.checkCookie = (req, res, next) => {
  // console.log('CHECK COOKIE req.cookies', req.cookies);
  const { Session } = req.cookies;
  let decoded = {};

  jwt.verify(Session, config.get('JWT_SECRET'), (err, token) => {
    if (!err) decoded = token;
    else decoded = 'No user logged in';
  });

  res.locals.sessionData = decoded;

  return next();
};

//might have to have a sessions id in database, not sure though?
authController.startSession = (req, res, next) => {
  if (res.locals.auth === true) {
    const token = jwt.sign({ user_id: res.locals.user_id, user_name: res.locals.user_name, auth: true }, config.get('JWT_SECRET'));
    res.cookie('Session', token, {
      httpOnly: true,
      secure: true,
    });
    console.log('set the cookie');
  }
  return next();
};

// template for logging in
authController.loginUser = (req, res, next) => {
  const { email, password } = req.body;
  let authObj = {};
  const authQuery = {
    text: `SELECT * FROM "User" WHERE email=$1`,
  };
  const value = [email];
  console.log('email', email);
  db.query(authQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(qres.rows[0]);
    authObj = qres.rows[0];
    console.log('authObj.password', authObj);
    if (!authObj) {
      return next();
    }

    if (
      // authObj.user_name === user_name &&
      //authObj.password === password &&
      Bcrypt.compareSync(password, authObj.password) &&
      authObj.email === email
    ) {
      res.locals.auth = true;
      res.locals.user_name = authObj.user_name;
      res.locals.user_id = authObj._id;
      console.log('res.locals', res.locals);
      return next();
    } else {
      res.locals.auth = false;
      return next();
    }
  });
};

authController.logoutUser = (req, res, next) => {
  res.clearCookie('Session');
  return next();
}

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
    console.log('req.body.password', req.body.password);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
