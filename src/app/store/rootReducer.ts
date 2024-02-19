import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@shared/api'
import { commentsSlice } from '@entities/comments'

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [commentsSlice.name]: commentsSlice.reducer,
})
