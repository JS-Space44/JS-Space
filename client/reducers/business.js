import * as types from '../constants/actionTypes';

const initialState = {
  problems: [
    {
      number: 0,
      name: 'playground',
      description:
        'This is the default view.  You can use this to play around with code.  If you want to create a problem to save and practice later head to the problems menu above',
      solutions: [],
      tests: [
        {
          number: 1,
          funcWithArgs: '',
        },
      ],
    },
  ],
  current: {
    number: 0,
    name: 'playground',
    description:
      'This is the default view.  You can use this to play around with code.  If you want to create a problem to save and practice later head to the problems menu above',
    solutions: [],
    tests: [
      {
        number: 1,
        funcWithArgs: '',
      },
    ],
  },
};

const businessReducer = (state = initialState, action) => {
  // declare variables up here
  switch (action.type) {
    default:
      return state;
  }
};

export default businessReducer;
