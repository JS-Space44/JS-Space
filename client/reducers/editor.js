import * as types from '../constants/actionTypes';

const initialState = {
  code: '',
  runCode: false,
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_CODE: {
      return { code: '' };
    }
    case types.LOAD_CODE: {
      return {...state, code: action.payload};
    }
    case types.RUN_CODE: {
      console.log('RUN CODE');
      return {...state, runCode: action.payload};
    }

    default:
      return state;
  }
};

export default editorReducer;
