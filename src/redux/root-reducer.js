import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer';

import directoryReducer from './directory/directory.reducer';

import shopReducer from './shop/shop.reducer';

/* A configuration object for the persistReducer function. */
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

/* Combining all the reducers into one root reducer. */
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory:directoryReducer,
  shop: shopReducer
  
});

/* Exporting the persistReducer function with the persistConfig and rootReducer as arguments. */
export default persistReducer(persistConfig, rootReducer);
  