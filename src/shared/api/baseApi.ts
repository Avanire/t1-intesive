import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { API_URL } from '../lib/config'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
})
