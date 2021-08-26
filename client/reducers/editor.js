import * as types from '../constants/actionTypes';

const initialState = {
  code: '',
  history: [],
  runCode: false,
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_CODE: {
      return { code: '' };
    }
    case types.LOAD_CODE: {
      return { ...state, code: action.payload };
    }
    case types.RUN_CODE: {
      console.log('RUN CODE');
      return { ...state, runCode: action.payload };
    }

    case types.ADD_HISTORY: {
      const newHistory = [...state.history, action.payload];
      return { ...state, history: newHistory };
    }

    default:
      return state;
  }
};

export default editorReducer;
