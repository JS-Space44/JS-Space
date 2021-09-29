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

apiController.createProblem = (req, res, next) => {
  const { user_id, name, description } = req.body;

  const createProblemsQuery = {
    text: `INSERT INTO "Problems" (user_id, name, description) VALUES ($1, $2, $3) RETURNING *`,
  };
  const values = [user_id, name, description];
  db.query(createProblemsQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.createdProblem = qres.rows[0];
    return next();
  });
};

apiController.createTestForProblem = (req, res, next) => {
  console.log('res.locals.createdProblem', res.locals.createdProblem);
  const { _id } = res.locals.createdProblem;
  const { tests } = req.body;
  const createTestForProblemQuery = {
    text: `INSERT INTO "Test" (func_with_args, problem_id) VALUES ($1, $2) RETURNING *`,
  };
  const values = [tests, _id];
  db.query(createTestForProblemQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.tests = qres.rows[0];
    console.log('tests', res.locals.tests);
    return next();
  });
};

apiController.updateTestIdForCreate = (req, res, next) => {
  const { _id } = res.locals.createdProblem;
  const test_id_from_create = res.locals.tests._id;
  console.log(' test_id_from_create', test_id_from_create);
  const updateTestIdForCreateQuery = {
    text: `UPDATE "Problems" SET test_id=$1 WHERE _id=$2 RETURNING *`,
  };
  const values = [test_id_from_create, _id];
  db.query(updateTestIdForCreateQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.createdProblem2 = qres.rows[0];
    console.log('updatedtestIDFORCreate', res.locals);
    return next();
  });
};

//gets problems
// apiController.getProblems = (req, res, next) => {
//   const { user_id } = req.body;

//   const getProblemsQuery = {
//     text: `SELECT * FROM "Problems" WHERE user_id = $1`,
//   };
//   const values = [user_id];

//   db.query(getProblemsQuery, values, (err, qres) => {
//     if (err) {
//       console.log(err);
//       return next(err);
//     }
//     res.locals.problems = qres.rows;
//     console.log('res.locals.problem', res.locals.problem);
//     return next();
//   });
// };

//get problems 2
apiController.getProblems = (req, res, next) => {
  const { user_id } = req.body;

  const getProblemsQuery = {
    text: `SELECT * FROM "Test" INNER JOIN "Problems" ON "Test"."problem_id"="Problems"."_id" WHERE user_id=$1`,
  };
  const values = [user_id];

  db.query(getProblemsQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }

    let problemsArr = qres.rows;
    problemsArr.forEach((e) => {
      e.tests = [
        {
          _id: e.test_id,
          funcWithArgs: e.func_with_args,
        },
      ];
      e.solutions = [
        {
          _id: 0,
          name: '',
          description: '',
          code: '',
        },
      ];
      delete e.func_with_args;
      delete e.problem_id;
      delete e.test_id;
      delete e.user_id;
      delete e.test_id;
    });
    console.log('problemsArr', problemsArr);
    res.locals.problems = problemsArr;
    console.log('res.locals.problems', res.locals.problems);
    return next();
  });
};

apiController.getProblemTests = (req, res, next) => {
  const { problem_id } = req.body;

  const getTestIdsQuery = {
    text: `SELECT * FROM "Test" WHERE problem_id=$1`,
  };
  const values = [problem_id];

  db.query(getTestIdsQuery, values, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals.tests = qres.rows;
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
