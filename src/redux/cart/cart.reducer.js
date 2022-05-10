import CartActionTypes from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

/**
 * It takes in the current state and an action and returns a new state.
 * @param [state] - the current state of the reducer
 * @param action - {type: "TOGGLE_CART_HIDDEN", payload: undefined}
 * @returns The state is being returned.
 */
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionTypes.CHECK_OUT_CLEAR_OUT:
      return {
        ...state,
        cartItems: INITIAL_STATE.cartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
