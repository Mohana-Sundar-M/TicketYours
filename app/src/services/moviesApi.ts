import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiEndpoints from '../apiEndpoints'; // Import the apiEndpoints

const baseUrl = import.meta.env.VITE_API_URL;

interface Movie {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;  // URL for the movie poster
  description: string;
  releaseDate: string;
  director: string;
  cast: string[];
  duration?: number;  // Optional property to handle movie duration
  language?: string;  // Optional language property
  rating?: number;    // Optional rating property
  timingsts?: string[]; // Optional property for showtimes
}

interface MoviesResponse {
  code: string;
  message: string;
  data: Movie[];
}

interface MovieDetailResponse {
  code: string;
  message: string;
  data: Movie;
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl, // Use the base URL from the environment variable
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string>({
      query: (cityId) => apiEndpoints.getMoviesByCity(cityId), // Use the endpoint from apiEndpoints
      transformResponse: (response: MoviesResponse) => 
        response.data.map(movie => ({
          ...movie,
          duration: movie.duration || 120, // Default duration if not provided
          language: movie.language || 'English', // Default language
          rating: movie.rating || 0, // Default rating
          timingsts: movie.timingsts || [], // Default empty array for timingsts
        })),
    }),
    getMoviesByCinemaHall: builder.query<Movie[], string>({
      query: (cinemaHallId) => apiEndpoints.getMoviesByCinemaHall(cinemaHallId), // Use the endpoint from apiEndpoints
      transformResponse: (response: MoviesResponse) =>
        response.data.map(movie => ({
          ...movie,
          duration: movie.duration || 120, // Add default values for missing fields
          language: movie.language || 'English',
          rating: movie.rating || 0,
          timingsts: movie.timingsts || [],
        })),
    }),
    getMovieDetails: builder.query<Movie, string>({
      query: (movieId) => apiEndpoints.getMovieDetails(movieId), // New endpoint
      transformResponse: (response: MovieDetailResponse) => ({
        ...response.data,
        duration: response.data.duration || 120,
        language: response.data.language || 'English',
        rating: response.data.rating || 0,
        timingsts: response.data.timingsts || [],
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesByCinemaHallQuery,
  useGetMovieDetailsQuery,
} = moviesApi;
