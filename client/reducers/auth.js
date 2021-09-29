/** @format */

import * as types from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  user_name: '',
  user_id: '0',
};

const authReducer = (state = initialState, action) => {
  // hook state variables for login Session cookie manipulation and retrieval

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

    case types.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        user_name: '',
        user_id: '',
      };

    default:
      return state;
  }
};

export default authReducer;
