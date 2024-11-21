import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiEndpoints from '../apiEndpoints';

export const otpApi = createApi({
  reducerPath: 'otpApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL, // Use Vite environment variable
  }),
  endpoints: (builder) => ({
    requestOtp: builder.mutation<{
      [x: string]: any; message: string 
}, { mobile: string }>({
      query: (body) => ({
        url: apiEndpoints.requestOtp,
        method: 'POST',
        body,
      }),
    }),
    verifyOtp: builder.mutation<{ success: boolean; token: string }, { token: string; otp: string }>({
      query: (body) => ({
        url: apiEndpoints.verifyOtp,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRequestOtpMutation, useVerifyOtpMutation } = otpApi;
