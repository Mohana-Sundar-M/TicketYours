import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from './services/citiesApi';
import { moviesApi } from './services/moviesApi';
import { cinemahallsApi } from './services/cinemahallsApi'; // Import the new service

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [cinemahallsApi.reducerPath]: cinemahallsApi.reducer, // Add the reducer
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      citiesApi.middleware, 
      moviesApi.middleware,
      cinemahallsApi.middleware // Add the middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
