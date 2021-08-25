/** @format */

import * as types from '../constants/actionTypes';

const initalState = {
  isLoggedIn: false,
  user_name: '',
  user_id: '',
};

const authReducer = (state = initalState, action) => {
  //declare variables up here
  console.log(action);
  let pay;
  switch (action.type) {
    // case types.   - dclare switch types here
    case types.SIGNUP_USER:
      pay = action.payload;
      console.log('payload', pay);
      return {
        ...state,
        user_name: action.payload.user_name,
        email: action.payload.email,
        user_id: action.payload.user_id,
      };

    case types.LOGIN_USER:
      pay = action.payload;
      console.log('payload', pay);
      return {
        ...state,
        user_name: action.payload.user_name,
        email: action.payload.email,
        user_id: action.payload.user_id,
        isLoggedIn: action.payload.auth,
      };

    default:
      return state;
  }
};

export default authReducer;
