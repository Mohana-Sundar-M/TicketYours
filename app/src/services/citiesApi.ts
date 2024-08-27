import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a type for the city
export interface City {
  id: number;
  name: string;
  state: string;
}

// Define a type for the API response
export interface FetchCitiesResponse {
  code: string;
  message: string;
  data: City[];
}

// Create an API service using RTK Query
export const citiesApi = createApi({
  reducerPath: 'citiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getCities: builder.query<FetchCitiesResponse, void>({
      query: () => '/v1/cities',
    }),
  }),
});

// Export hooks for using the query in components
export const { useGetCitiesQuery } = citiesApi;
