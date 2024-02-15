import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '../../shared/api'

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})
