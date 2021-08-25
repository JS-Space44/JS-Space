import * as types from '../constants/actionTypes';

const actions = {};

actions.createProblem = (user_id, name, description, tests) => (dispatch) => {
  const createProblemObj = {
    user_id,
    name,
    description,
    tests, // might not need this one
  };
  fetch('/api/createProblem', {
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

actions.deleteProblem = (problem_id, user_id) => (dispatch) => {
  fetch('/api/deleteProblem', {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({ problem_id, user_id }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.DELETE_PROBLEM,
        payload: { problem_id, user_id },
      });
    })
    .catch((err) => {
      console.log('err in delete problem', err);
    });
};
// type: types.DELETE_PROBLEM,
// payload: '',

actions.getProblems = (user_id) => (dispatch) => {
  fetch('/api/getProblems', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({ user_id }),
  })
    .then((res) => res.json())
    .then((problems) => {
      console.log('problems data', data);
      dispatch({
        type: types.GET_PROBLEMS,
        payload: { problems },
      });
    });
};
// get problem based on user_name or user_id
// gets called on login - state holding array of problems
// need get problems sql call

actions.updateProblems = () => ({
  type: types.UPDATE_PROBLEM,
  payload: '',
});

actions.signUpUser = (user_name, password, email) => (dispatch) => {
  // const { email, user_name, password } = valuesObject;
  console.log('valuesObject from signUp', user_name, password, email);
  const payloadObj = {
    user_name,
    password,
    email,
  };
  fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({ user_name, password, email }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('right before dispatch');
      console.log('from res', res);

      dispatch({
        type: types.SIGNUP_USER,
        payload: { user_name, password, email },
      });
    })
    .catch((err) => {
      console.log('error in signupuser action', err);
    });
};

actions.LoginUser = (email, password) => (dispatch) => {
  console.log('console from login', email, password);
  return fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      const { user_name, user_id, auth } = res;
      console.log('from response data', user_name, user_id, auth);
      dispatch({
        type: types.LOGIN_USER,
        payload: { email, password, user_name, user_id, auth },
      });
    });
};

actions.LogoutUser = () => ({
  type: types.LOGOUT_USER,
});

actions.setCurrentProblem = (id) => (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_PROBLEM,
    payload: id,
  });
};

actions.clearCode = () => ({
  type: types.CLEAR_CODE,
  payload: '',
});

actions.loadCode = (code) => ({
  type: types.LOAD_CODE,
  payload: code,
});

actions.runCode = () => ({
  type: types.RUN_CODE,
});

export default actions;
