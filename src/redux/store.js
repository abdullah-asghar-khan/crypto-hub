import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptoReducers from './cryptoReducers';

const store = configureStore({
  reducer: {
    crypto: cryptoReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;