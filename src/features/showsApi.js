import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const showsApi = createApi({
  reducerPath: 'showsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com' }),
  endpoints: builder => ({
    getShows: builder.query({
      query: () => '/shows'
    })
  }),
})

export const { useGetShowsQuery } = showsApi