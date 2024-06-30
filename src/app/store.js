import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/api.js';
import authReducer from './authSlice.js';
import queryReducer from './querySlice.js';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    query: queryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
