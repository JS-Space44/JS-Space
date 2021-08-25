/** @format */

// where the actions actually are decalared
import * as types from '../constants/actionTypes';
const actions = {};

actions.createProblem = (user_id, name, description, tests) => (dispatch) => {
  const createProblemObj = {
    user_id,
    name,
    description,
    tests, //might not need this one
  };
  fetch('api/createProblem', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify(createProblemObj),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.ADD_PROBLEM,
        payload: createProblemObj,
      });
    })
    .catch((err) => {
      console.log('err in createProblem action', err);
    });
};
// type: types.ADD_PROBLEM,

actions.deleteProblem = () => ({
  type: types.DELETE_PROBLEM,
  payload: '',
});

actions.getProblems = () => ({
  type: types.GET_PROBLEMS,
  payload: '',
});

actions.updateProblems = () => ({
  type: types.UPDATE_PROBLEM,
  payload: '',
});

actions.signUpUser = (email, userName, userPassword) => ({
  type: types.SIGNUP_USER,
  payload: email,
  userName,
  userPassword,
});

actions.LoginUser = (email, userPassword) => ({
  type: types.LOGIN_USER,
  payload: email,
  userPassword,
});

actions.LogoutUser = () => ({
  type: types.LOGOUT_USER,
});

export default actions;
