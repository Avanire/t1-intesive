import { baseApi } from '../../../shared/api'
import { Query } from './types'
import { Posts } from '../model/type'

export const postApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allPost: build.query<Posts, Query>({
            query: (data) => ({
                url: `posts?limit=12&skip=${data.skip}${data.selectFields ? `&select=${data.selectFields.join(',')}` : ''}`,
            }),
        }),
    }),
})

export const { useAllPostQuery } = postApi
