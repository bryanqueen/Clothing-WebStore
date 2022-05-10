const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: '',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: '',
    },
    {
      title: 'women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: '',
    },
    {
      title: 'men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: '',
    },
  ],
};

/**
 * It takes in a state and an action and returns a new state.
 *
 * The state is the current state of the application. The action is an object that describes what
 * happened.
 *
 * The reducer is a pure function. It doesn't mutate the state. It returns a new state.
 *
 * The reducer is the only way to change the state.
 *
 * The reducer is called every time an action is dispatched.
 *
 * The reducer is called with the current state and the action.
 *
 * The reducer returns the new state.
 *
 * The reducer is the only way to change the state.
 *
 * The reducer is called every time an action is dispatched.
 *
 * The reducer is called with the current state and the action.
 *
 * The reducer returns the new state.
 *
 * The reducer is the
 * @param [state] - the current state of the reducer
 * @param action - An object that represents the action that was dispatched.
 * @returns The state is being returned.
 */
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
