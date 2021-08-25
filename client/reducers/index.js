/** @format */

import { combineReducers } from 'redux';

// import other reducers here
import businessReducer from './business';
import authReducer from './auth';
import editorReducer from './editor';

const reducers = combineReducers({
  business: businessReducer,
  auth: authReducer,
  editor: editorReducer,
});

export default reducers;
