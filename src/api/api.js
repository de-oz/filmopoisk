import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'http://localhost:3030/api/v1';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page = 1, title = '', genre = '', year = '' }) => {
        let queryString = `/search?page=${page}`;
        if (title) queryString += `&title=${title}`;
        if (genre) queryString += `&genre=${genre}`;
        if (year) queryString += `&release_year=${year}`;
        return queryString;
      },
    }),
    getMovieById: builder.query({
      query: (id) => `/movie/${id}`,
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    rateMovie: builder.mutation({
      query: ({ id, rating }) => ({
        url: '/rateMovie',
        method: 'POST',
        body: { movieId: id, user_rate: rating },
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useLoginUserMutation,
  useRateMovieMutation,
} = apiSlice;
