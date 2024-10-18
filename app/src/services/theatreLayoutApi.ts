import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiEndpoints from '../apiEndpoints';

const baseUrl = import.meta.env.VITE_API_URL;

export const theatreLayoutApi = createApi({
  reducerPath: 'theatreLayoutApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTheatreLayout: builder.query<any, { showtimeId: string, screenId: string }>({
      query: ({ showtimeId, screenId }) => apiEndpoints.getTheatreLayout(showtimeId, screenId),
    }),
  }),
});

export const { useGetTheatreLayoutQuery } = theatreLayoutApi;
