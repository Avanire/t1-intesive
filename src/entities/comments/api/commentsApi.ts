import { baseApi } from '../../../shared/api'
import { CommentsDto } from './types'
import { Comments } from '../model/types'
import { mapComments } from '../lib/mapComments'

export const commentsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allComments: build.query<CommentsDto[], void>({
            query: () => ({
                url: 'comments',
            }),
            transformResponse: (response: Comments) =>
                response.comments.map(mapComments),
        }),
        getCommentsByPostId: build.query<CommentsDto[], string | undefined>({
            query: (id) => ({
                url: `comments/post/${id}`,
            }),
            transformResponse: (response: Comments) =>
                response.comments.map(mapComments),
        }),
    }),
})

export const { useAllCommentsQuery, useGetCommentsByPostIdQuery } = commentsApi
