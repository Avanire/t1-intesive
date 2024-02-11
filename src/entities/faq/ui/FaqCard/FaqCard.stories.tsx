import { Meta, StoryObj } from '@storybook/react'
import { FaqCard } from './FaqCard'

const meta: Meta<typeof FaqCard> = {
    component: FaqCard,
    title: 'entities/faq/ui/FaqCard',
}

export default meta

type Story = StoryObj<typeof FaqCard>

export const Default: Story = {
    args: {
        question: 'Questions?',
        answer: 'Answer',
    },
}
