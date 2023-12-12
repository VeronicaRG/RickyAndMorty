import { getPersistConfig } from 'redux-deep-persist';
import { persistReducer, Storage } from 'redux-persist';

import { storage } from '@src/services/mmkv';

import { ReducersType } from './store/reducers';

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(`redux.${key}`, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(`redux.${key}`);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(`redux.${key}`);
    return Promise.resolve();
  },
};

const persistReducers = (reducers: ReducersType) => {
  const persistedReducer = persistReducer(
    getPersistConfig({
      key: 'RickyAndMorty',
      storage: reduxStorage,
      blacklist: [],
      rootReducer: reducers,
    }),
    reducers,
  );

  return persistedReducer;
};

export { persistReducers };
