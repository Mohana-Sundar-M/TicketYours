import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiEndpoints from '../apiEndpoints'; // Import the apiEndpoints

const baseUrl = import.meta.env.VITE_API_URL;

interface Movie {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
}

interface MoviesResponse {
  code: string;
  message: string;
  data: Movie[];
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl, // Use the base URL from the environment variable
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string>({
      query: (cityId) => apiEndpoints.getMoviesByCity(cityId), // Use the endpoint from apiEndpoints
      transformResponse: (response: MoviesResponse) => response.data,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
