import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiEndpoints from '../apiEndpoints';

const baseUrl = import.meta.env.VITE_API_URL;

export const cinemahallsApi = createApi({
  reducerPath: 'cinemahallsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCinemahallsByCity: builder.query<any, string>({
      query: (cityId) => apiEndpoints.getCinemahallsByCity(cityId),
    }),
    getCinemahallsByCityAndMovie: builder.query<any, { cityId: string, movieId: string }>({
      query: ({ cityId, movieId }) => apiEndpoints.getCinemahallsByCityAndMovie(cityId, movieId),
    }),
    getScreensByCinemaHall: builder.query<any, string>({
      // New API query to get all screens inside a specific cinema hall
      query: (cinemaHallId) => apiEndpoints.getScreensByCinemaHall(cinemaHallId),
    }),
  }),
});

export const { 
  useGetCinemahallsByCityQuery, 
  useGetCinemahallsByCityAndMovieQuery,
  useGetScreensByCinemaHallQuery // New hook for getting screens by cinema hall
} = cinemahallsApi;
