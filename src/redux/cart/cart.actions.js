import CartActionTypes from './cart.types';

/**
 * It's a function that returns an object with a type property and a payload property.
 */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const checkoutClearOut = (item) => ({
  type: CartActionTypes.CHECK_OUT_CLEAR_OUT,
});
