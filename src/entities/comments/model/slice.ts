import { createSlice } from '@reduxjs/toolkit'
import { commentsApi } from '../api/commentsApi'
import { CommentsDto } from '../api/types'
import { RootState } from '@app/store/store'

type CommentsSliceState = {
    comments: Array<CommentsDto>
    commentsByPost: Array<CommentsDto>
}

const initialState: CommentsSliceState = {
    comments: [],
    commentsByPost: [],
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        resetCommentsByPost(state) {
            state.commentsByPost = []
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            commentsApi.endpoints.allComments.matchFulfilled,
            (state, { payload }) => {
                state.comments = payload
            }
        )
        builder.addMatcher(
            commentsApi.endpoints.getCommentsByPostId.matchFulfilled,
            (state, { payload }) => {
                state.commentsByPost = payload
            }
        )
        builder.addMatcher(
            commentsApi.endpoints.addComment.matchFulfilled,
            (state, { payload }) => {
                state.commentsByPost = [...state.commentsByPost, payload]
            }
        )
    },
})

export const commentsSelector = (state: RootState) => state.comments

export const { resetCommentsByPost } = commentsSlice.actions
