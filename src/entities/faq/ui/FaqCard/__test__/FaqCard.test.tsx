import { fireEvent, render, screen } from '@testing-library/react'
import { FaqCard } from 'entities/faq'

const mockProps = {
    question: 'mock question?',
    answer: 'mock answer',
}

describe('Test component <FaqCard/>', () => {
    test('Should render component <FaqCard/>', () => {
        render(
            <FaqCard question={mockProps.question} answer={mockProps.answer} />
        )

        expect(screen.getByText('mock question?')).toHaveTextContent(
            'mock question?'
        )
    })

    test('Should open answer', () => {
        render(
            <FaqCard question={mockProps.question} answer={mockProps.answer} />
        )

        expect(screen.getByText('mock answer')).toHaveClass('answerToggled')

        fireEvent.click(screen.getByText('mock question?'))

        expect(screen.getByText('mock answer')).not.toHaveClass('answerToggled')
    })
})
