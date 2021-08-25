import * as types from '../constants/actionTypes';

const actions = {};

actions.createProblem = () => ({
  type: types.ADD_PROBLEM,
  payload: '',
});

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

actions.setCurrentProblem = (id) => (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_PROBLEM,
    payload: id,
  });
};

export default actions;
