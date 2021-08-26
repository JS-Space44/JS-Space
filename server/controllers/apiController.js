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
  const deleteTestFromProblemQuery = {
    text: `DELETE FROM "Problems" WHERE _id=$1;`,
  };
  const values = [problem_id];
  db.query(deleteTestFromProblemQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.tests = qres;
    console.log('res.locals from delete tests', res.locals);
    return next();
  });
};

apiController.updateProblem = (req, res, next) => {
  const { problem_id, name, description } = req.body;
  const updateProblemQuery = {
    text: `UPDATE "Problems" SET name=$1, description=$2 WHERE _id=$3`,
  };
  const values = [name, description, problem_id];
  db.query(updateProblemQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
    console.log('res.locals from updateProblem', res.locals);
    return next();
  });
};

apiController.updateTestForProblem = (req, res, next) => {
  const { problem_id, user_id, tests, test_id } = req.body;
  const updateTestForProblemQuery = {
    text: `UPDATE "Test" SET func_with_args=$1 WHERE _id=$2`,
  };
  const values = [tests, test_id];
  db.query(updateTestForProblemQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
    console.log('res.locals from updateTestForProblem', res.locals);
    return next();
  });
};

module.exports = apiController;
