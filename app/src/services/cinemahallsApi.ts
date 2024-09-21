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
  }),
});

export const { 
  useGetCinemahallsByCityQuery, 
  useGetCinemahallsByCityAndMovieQuery 
} = cinemahallsApi;
