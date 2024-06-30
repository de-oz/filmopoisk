import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'http://localhost:3030/api/v1';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page = 1, title = '' }) => `/search?page=${page}${title ? `&title=${title}` : ''}`,
    }),
  }),
});

export const { useGetMoviesQuery } = apiSlice;
