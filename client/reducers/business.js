import * as types from '../constants/actionTypes';
import defaultPlayground from '../initialData/playground';

const initialState = {
  problems: [defaultPlayground],
  current: defaultPlayground,
};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PROBLEM: {
      const newCurrentProblem = state.problems.find(
        (problem) => problem.id === action.payload
      );

      return {
        ...state,
        current: newCurrentProblem,
      };
    }
    case types.GET_PROBLEMS: {
      return {
        ...state,
        problems: payload.problems,
      };
    }
  }
};

export default businessReducer;
