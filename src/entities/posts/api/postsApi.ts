import { baseApi } from '@shared/api'
import { Query } from './types'
import { Post, Posts } from '../model/type'
import { User } from '@entities/user/model/types'
import { transformUser } from '@entities/user/lib/transformUser'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const postsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allPost: build.query<Posts, Query>({
            query: (data) => ({
                url: `posts?limit=12&skip=${data.skip}${data.selectFields ? `&select=${data.selectFields.join(',')}` : ''}`,
            }),
        }),
        post: build.query<Post, string | undefined>({
            query: (id) => ({
                url: `posts/${id}`,
            }),
        }),
        postWithUser: build.query({
            queryFn: async (postId, _queryApi, _extraOptions, fetchWithBQ) => {
                const postRes = await fetchWithBQ(`post/${postId}`)
                if (postRes.error) {
                    return { error: postRes.error as FetchBaseQueryError }
                }
                const post = postRes.data as Post

                const userRes = await fetchWithBQ(`user/${post.userId}`)
                if (userRes.error) {
                    return { error: userRes.error as FetchBaseQueryError }
                }
                const user = userRes.data as User
                const adaptedUser = transformUser(user)

                return { data: { user: adaptedUser, post: post } }
            },
        }),
    }),
})

export const { useAllPostQuery, usePostQuery, usePostWithUserQuery } = postsApi
