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

actions.signUpUser = (user_name, password, email) => (dispatch) => {
  // const { email, user_name, password } = valuesObject;
  console.log('valuesObject from signUp', user_name, password, email);
  fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({ user_name, password, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.SIGNUP_USER,
        payload: user_name,
        password,
        email,
      });
    })
    .catch((err) => {
      console.log('error in signupuser action', err);
    });
};

actions.LoginUser = (email, password) => (dispatch) => {
  console.log('console from login', email, password);
  fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGIN_USER,
        payload: email,
        password,
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

export default actions;
