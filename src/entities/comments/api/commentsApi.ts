import { baseApi } from '@shared/api'
import { CommentsDto } from './types'
import { Comment, Comments } from '../model/types'
import { mapComments } from '../lib/mapComments'
import { transformComment } from '@entities/comments/lib/transformComment'

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
            providesTags: ['Comments'],
        }),
        addComment: build.mutation<CommentsDto, string>({
            query: (body) => ({
                url: 'comments/add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
            }),
            transformResponse: (response: Comment) =>
                transformComment(response),
        }),
    }),
})

export const {
    useAllCommentsQuery,
    useGetCommentsByPostIdQuery,
    useAddCommentMutation,
} = commentsApi
