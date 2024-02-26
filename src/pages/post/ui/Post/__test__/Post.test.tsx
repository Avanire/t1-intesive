import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { renderWithProviders } from 'app/hoc/renderWithProviders'
import Post from 'pages/post/ui/Post/Post'
import { comments, post, user } from 'pages/post/ui/Post/__test__/mockData'
import { screen } from '@testing-library/react'

export const handlers = [
    http.get('https://dummyjson.com/post/:id', async () => {
        return HttpResponse.json(post)
    }),
    http.get('https://dummyjson.com/user/:id', async () => {
        return HttpResponse.json(user)
    }),
    http.get('https://dummyjson.com/comments/post/:id', async () => {
        return HttpResponse.json(comments)
    }),
]

const server = setupServer(...handlers)

beforeAll(() => {
    server.listen()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
    server.close()
})

describe('Test component <Post/>', () => {
    test('Should render component with data', async () => {
        renderWithProviders(<Post />)

        expect(
            await screen.findByText(
                'There are different types of secrets.',
                {},
                { timeout: 3000 }
            )
        ).toHaveTextContent('There are different types of secrets.')

        expect(
            await screen.findByText('Demetrius Corkery', {}, { timeout: 3000 })
        ).toHaveTextContent('Demetrius Corkery')
    })
})
