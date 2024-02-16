import { baseApi } from '../../../shared/api'
import { Query } from './types'
import { Post, Posts } from '../model/type'

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
    }),
})

export const { useAllPostQuery, usePostQuery } = postsApi
