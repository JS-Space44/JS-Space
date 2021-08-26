const db = require('../models/model');

const apiController = {};

/* 
this comes back with 
rows [{
  "_id": 2,
  "name" : name12,
  "description" : description,
  "user_id" : 20,
  "test_id" : ?
}]
*/
apiController.getProblems = (req, res, next) => {
  const { user_id } = req.body;

  const getProblemsQuery = {
    text: `SELECT * FROM "Problems" WHERE user_id = $1`,
  };
  const values = [user_id];

  db.query(getProblemsQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.problems = qres.rows;
    console.log('res.locals.problem', res.locals.problem);
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

apiController.deleteProblem = (req, res, next) => {
  const { problem_id, user_id } = req.body;
  const deleteProblemsQuery = {
    text: `DELETE FROM "Test" WHERE problem_id = $1`,
  };

  const values = [problem_id];
  db.query(deleteProblemsQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.deletedProblem = qres;
    console.log('res.locals from deleteProblem', res.locals);
    return next();
  });
};

apiController.deleteTestFromProblem = (req, res, next) => {
  const { problem_id } = req.body;
  const deleteTestFromProblem = {
    text: `DELETE FROM "Problems" WHERE _id=$1;`,
  };
  const values = [problem_id];
  db.query(deleteTestFromProblem, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.tests = qres;
    console.log('res.locals from delete tests', res.locals);
    return next();
  });
};

module.exports = apiController;
