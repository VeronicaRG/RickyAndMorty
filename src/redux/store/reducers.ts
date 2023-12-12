import { combineReducers } from 'redux';

import { favoritesReducer } from './favorites';

export const reducers = combineReducers({
  favorites: favoritesReducer,
});

export type ReducersType = typeof reducers;
