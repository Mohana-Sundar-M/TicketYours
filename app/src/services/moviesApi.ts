import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string>({
      query: (cityId) => `v3/movies/city/${cityId}`,
      transformResponse: (response: MoviesResponse) => response.data,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
