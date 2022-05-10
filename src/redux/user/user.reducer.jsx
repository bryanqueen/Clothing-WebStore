import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

/**
 * If the action type is SET_CURRENT_USER, then return a new state object with the currentUser property
 * set to the payload of the action.
 * @returns The state is being returned with the currentUser property set to the payload.
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
