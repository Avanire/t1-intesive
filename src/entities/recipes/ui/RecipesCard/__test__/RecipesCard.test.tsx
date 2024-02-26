import { render, screen } from '@testing-library/react'
import { RecipesCard } from 'entities/recipes'

const mockProps = {
    id: 1,
    name: 'mock name',
    image: 'mock-img.png',
    tags: ['hash1', 'hash2'],
    cookTimeMinutes: 23,
    rating: 4,
}

describe('Test component <RecipesCard/>', () => {
    test('Should render component <RecipesCard/>', async () => {
        render(<RecipesCard {...mockProps} />)

        expect(screen.getByAltText('mock name')).toHaveAttribute(
            'src',
            'mock-img.png'
        )

        expect(screen.getByText('hash1')).toBeInTheDocument()

        expect(screen.getByText('23min')).toBeInTheDocument()
    })
})
