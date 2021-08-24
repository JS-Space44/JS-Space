import * as types from '../constants/actionTypes';

const initialState = {
  problems: [
    {
      number: 0,
      name: 'playground',
      description:
        'This is the default view.  You can use this to play around with code.  If you want to create a problem to save and practice later head to the problems menu above. Taiyaki etsy poutine heirloom small batch drinking vinegar typewriter, four loko chartreuse thundercats. Flannel salvia actually, sriracha gluten-free cloud bread chambray +1. Brunch salvia taxidermy, synth stumptown palo santo four dollar toast cronut cold-pressed truffaut. Gluten-free pickled leggings umami artisan cray. Copper mug ennui pork belly bushwick. Fashion axe intelligentsia vice photo booth la croix edison bulb enamel pin ennui marfa neutra cliche. Blog next level hella, quinoa mixtape XOXO prism activated charcoal occupy cloud bread readymade post-ironic schlitz tumeric.',
      solutions: [],
      tests: [
        {
          number: 1,
          funcWithArgs: 'maxValue([4, 7, 2, 8, 10, 9]); // -> 10',
        },
      ],
    },
  ],
  current: {
    number: 0,
    name: 'playground',
    description:
      'This is the default view.  You can use this to play around with code.  If you want to create a problem to save and practice later head to the problems menu above. Taiyaki etsy poutine heirloom small batch drinking vinegar typewriter, four loko chartreuse thundercats. Flannel salvia actually, sriracha gluten-free cloud bread chambray +1. Brunch salvia taxidermy, synth stumptown palo santo four dollar toast cronut cold-pressed truffaut. Gluten-free pickled leggings umami artisan cray. Copper mug ennui pork belly bushwick. Fashion axe intelligentsia vice photo booth la croix edison bulb enamel pin ennui marfa neutra cliche. Blog next level hella, quinoa mixtape XOXO prism activated charcoal occupy cloud bread readymade post-ironic schlitz tumeric.',
    solutions: [],
    tests: [
      {
        number: 1,
        funcWithArgs: 'maxValue([4, 7, 2, 8, 10, 9]); // -> 10',
      },
      {
        number: 2,
        funcWithArgs: 'maxValue([4, 7, 2, 8, 10, 9]); // -> 10',
      },
      {
        number: 3,
        funcWithArgs: 'maxValue([4, 7, 2, 8, 10, 9]); // -> 10',
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
