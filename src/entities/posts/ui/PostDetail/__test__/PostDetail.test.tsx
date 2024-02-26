import { render, screen } from '@testing-library/react'
import { PostDetail } from 'entities/posts'

const mockProps = {
    title: 'mockTitle',
    body: 'mockBody',
    tags: ['mock1', 'mock2'],
    reactions: 4,
    fullName: 'full name',
    photo: 'mock.jpg',
}

describe('Test component <PostDetail/>', () => {
    test('Should render heading title', () => {
        render(<PostDetail {...mockProps} />)

        expect(screen.getByText(mockProps.title)).toHaveTextContent('mockTitle')
    })

    test('Should render user info', () => {
        render(<PostDetail {...mockProps} />)

        expect(screen.getByAltText(mockProps.fullName)).toHaveAttribute(
            'src',
            mockProps.photo
        )

        expect(screen.getByText(mockProps.fullName)).toBeTruthy()
    })

    test('Should render block reactions', () => {
        render(<PostDetail {...mockProps} />)

        expect(
            screen.getByAltText(`Reactions ${mockProps.reactions}`)
        ).toBeTruthy()
    })

    test('Should render block hashtags', () => {
        render(<PostDetail {...mockProps} />)

        expect(screen.getAllByTestId('test-hashtag')).toBeTruthy()
    })

    test('Should render post body', () => {
        render(<PostDetail {...mockProps} />)

        expect(screen.getByTestId('test-post-detail-body')).toBeTruthy()
    })
})
