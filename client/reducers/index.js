/** @format */

import { combineReducers } from "redux";

// import other reducers here
import businessReducer from "./business";
import authReducer from "./auth";

const reducers = combineReducers({
  business: businessReducer,
  auth: authReducer,
});

export default reducers;
