import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from './services/citiesApi';
import { moviesApi } from './services/moviesApi';
import { cinemahallsApi } from './services/cinemahallsApi';

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [cinemahallsApi.reducerPath]: cinemahallsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      citiesApi.middleware,
      moviesApi.middleware,
      cinemahallsApi.middleware
    ),
});

// Explicitly type the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
