import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from './services/citiesApi';
import { moviesApi } from './services/moviesApi';

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware, moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
