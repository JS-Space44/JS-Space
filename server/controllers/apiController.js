const db = require('../models/model');

const apiController = {};

apiController.getProblems = (req, res, next) => {
  const { user_id } = req.body;

  const getProblemsQuery = {
    text: `SELECT * FROM problems WHERE user_id = $1`,
  };
  const values = [user_id];

  db.query(getProblemsQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.problems = qres;
    return next();
  });
};

apiController.getProblemFields = (req, res, next) => {
  const { problem_id } = req.body;
  const getFieldsQuery = {
    text: `SELECT * FROM problems WHERE problem_id = $1`,
  };
  const value = [problem_id];
  db.query(getFieldsQuery, value, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.fields = qres;
    return next();
  });
};

module.exports = apiController;
