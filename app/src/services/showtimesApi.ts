import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiEndpoints from '../apiEndpoints';

const baseUrl = import.meta.env.VITE_API_URL;

export const showtimesApi = createApi({
  reducerPath: 'showtimesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getShowtimesByScreen: builder.query<any, string>({
      query: (screenId) => apiEndpoints.getShowtimesByScreen(screenId),
    }),
    getShowtimesByDate: builder.query<any, { screenId: string, date: string }>({
      query: ({ screenId, date }) => apiEndpoints.getShowtimesByDate(screenId, date),
    }),
    getAvailableShowtimes: builder.query<any, { movieId: string, cityId: string }>({
      query: ({ movieId, cityId }) => apiEndpoints.getAvailableShowtimes(movieId, cityId),
    }),
    getCinemahallsWithShowtimes: builder.query<any, { movieId: string, cityId: string }>({
      // Only movieId and cityId are needed
      query: ({ movieId, cityId }) => apiEndpoints.getCinemahallsWithShowtimes(movieId, cityId),
    }),
  }),
});

export const {
  useGetShowtimesByScreenQuery,
  useGetShowtimesByDateQuery,
  useGetAvailableShowtimesQuery,
  useGetCinemahallsWithShowtimesQuery
} = showtimesApi;
