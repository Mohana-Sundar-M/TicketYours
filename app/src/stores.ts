import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from './services/citiesApi';
import { moviesApi } from './services/moviesApi';
import { cinemahallsApi } from './services/cinemahallsApi';
import { showtimesApi } from './services/showtimesApi';
import { theatreLayoutApi } from './services/theatreLayoutApi';
import { otpApi } from './services/otpApi'; // Import the new OTP API

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [cinemahallsApi.reducerPath]: cinemahallsApi.reducer,
    [showtimesApi.reducerPath]: showtimesApi.reducer,
    [theatreLayoutApi.reducerPath]: theatreLayoutApi.reducer,
    [otpApi.reducerPath]: otpApi.reducer, // Add the OTP API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      citiesApi.middleware,
      moviesApi.middleware,
      cinemahallsApi.middleware,
      showtimesApi.middleware,
      theatreLayoutApi.middleware,
      otpApi.middleware // Add the OTP API middleware
    ),
});

// Explicitly type the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
