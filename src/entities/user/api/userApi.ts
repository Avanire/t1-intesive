import { baseApi } from '../../../shared/api'
import { User } from '../model/types'
import { UserDto } from './types'
import { transformUser } from '../lib/transformUser'

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<UserDto, number | undefined>({
            query: (id) => ({
                url: `user/${id}`,
            }),
            transformResponse: (response: User) => transformUser(response),
        }),
    }),
})

export const { useGetUserQuery } = userApi
