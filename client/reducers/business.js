import * as types from '../constants/actionTypes';
import defaultPlayground from '../initialData/playground';

const initialState = {
  problems: [
    defaultPlayground,
    {
      id: 1,
      name: 'twoSum',
      description: 'This is the default view. ',
      solutions: [
        {
          id: 0,
          name: '',
          description: '',
          code: '',
        },
      ],
      tests: [
        {
          id: 1,
          funcWithArgs: 'maxValue([4, 7, 2, 8, 10, 9]); // -> 10',
        },
      ],
    },
  ],
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
    default: {
      return state;
    }
  }
};

export default businessReducer;
