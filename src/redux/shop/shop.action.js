import { ShopActionTypes } from './shop.types';

export const setItems = (data) => ({
  type: ShopActionTypes.SET_ITEMS,
  payload: data,
});
