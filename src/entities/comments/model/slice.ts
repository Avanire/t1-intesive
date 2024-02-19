import { createSlice } from '@reduxjs/toolkit'
import { commentsApi } from '../api/commentsApi'
import { CommentsDto } from '../api/types'
import { RootState } from '@app/store/store'

type CommentsSliceState = {
    comments: Array<CommentsDto>
}

const initialState: CommentsSliceState = {
    comments: [],
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            commentsApi.endpoints.allComments.matchFulfilled,
            (state, { payload }) => {
                state.comments = payload
            }
        )
    },
})

export const commentsSelector = (state: RootState) => state.comments
