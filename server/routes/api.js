const express = require('express');

const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/getProblems', apiController.getProblems, (req, res) => {
  return res.status(200).json(res.locals.problems);
});

// router.post('/getTest', apiController.getProblemTests, (req, res) => {
//   return res.status(200).json(res.locals.tests);
// });

router.delete(
  '/deleteProblem',
  apiController.deleteProblem,
  apiController.deleteTestFromProblem,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

router.post(
  '/updateProblem',
  apiController.updateProblem,
  apiController.updateTestForProblem,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);
router.post(
  '/createProblem',
  apiController.createProblem,
  apiController.createTestForProblem,
  apiController.updateTestIdForCreate,
  (req, res) => {
    return res.status(200).json(res.locals.createdProblem2);
  }
);

router.post('/', (req, res) => {});

module.exports = router;
