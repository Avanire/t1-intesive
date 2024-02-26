import { Comments } from 'entities/comments/model/types'
import { mapComments } from 'entities/comments/lib/mapComments'

describe('Test function mapComments', () => {
    test('Should return transformed comments', () => {
        const mockCommentApiData: Comments = {
            comments: [
                {
                    id: 1,
                    postId: 2,
                    user: {
                        id: 123,
                        username: 'mock name',
                    },
                    body: 'mock string body',
                },
                {
                    id: 2,
                    postId: 3,
                    user: {
                        id: 123,
                        username: 'mock name',
                    },
                    body: 'mock string body',
                },
            ],
            limit: 12,
            skip: 0,
            total: 150,
        }

        expect(mockCommentApiData.comments.map(mapComments)).toEqual([
            {
                id: 1,
                username: 'mock name',
                feedback: 'mock string body',
                postId: 2,
            },
            {
                id: 2,
                username: 'mock name',
                feedback: 'mock string body',
                postId: 3,
            },
        ])
    })
})
