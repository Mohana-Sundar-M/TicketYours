import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from './services/citiesApi';
import { moviesApi } from './services/moviesApi';
import { cinemahallsApi } from './services/cinemahallsApi';
import { showtimesApi } from './services/showtimesApi';
import { theatreLayoutApi } from './services/theatreLayoutApi';  // New import

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [cinemahallsApi.reducerPath]: cinemahallsApi.reducer,
    [showtimesApi.reducerPath]: showtimesApi.reducer,
    [theatreLayoutApi.reducerPath]: theatreLayoutApi.reducer,  // Add theatreLayoutApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      citiesApi.middleware,
      moviesApi.middleware,
      cinemahallsApi.middleware,
      showtimesApi.middleware,
      theatreLayoutApi.middleware  // Add theatreLayoutApi middleware
    ),
});

// Explicitly type the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
