/** @format */

import * as types from "../constants/actionTypes";

const initalState = {
    isLoggedIn = false,

};

const authReducer = (state = initalState, action) => {
  //declare variables up here

  switch (action.type) {
    // case types.   - dclare switch types here
    case types.SIGNUP_USER:
        


    default:
      return state;
  }
};

export default authReducer;
