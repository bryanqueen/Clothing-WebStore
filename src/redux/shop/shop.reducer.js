import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: [],
};

/**
 * It takes in a state and an action and returns a new state based on the action type.
 * 
 * The state is the current state of the application.
 * 
 * The action is an object that contains a type and a payload.
 * 
 * The type is a string that describes the action.
 * 
 * The payload is the data that is needed to update the state.
 * 
 * The switch statement checks the action type and returns a new state based on the action type.
 * 
 * If the action type is not recognized, the default case is returned.
 * 
 * The default case returns the current state.
 * 
 * The new state is then passed to the root reducer.
 * 
 * The root reducer combines the new state with the current state and returns the new state to the
 * store.
 * 
 * The store then updates the application state.
 * 
 * The application state is then
 * @param [state] - the current state of the reducer
 * @param action - {type: "SET_ITEMS", payload: {...}}
 * @returns The state is being returned with the collections property set to the payload.
 */
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_ITEMS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
