import { Meta, StoryObj } from '@storybook/react'
import { Head } from './Head'

const meta: Meta<typeof Head> = {
    component: Head,
    title: 'shared/ui/Head',
}

export default meta

type Story = StoryObj<typeof Head>

export const H1: Story = {
    args: {
        highlightNumber: 1,
        head: 'h1',
        children: 'Заголовок H1',
    },
}

export const H2: Story = {
    args: {
        highlightNumber: 1,
        head: 'h2',
        children: 'Заголовок H2',
    },
}

export const H3: Story = {
    args: {
        highlightNumber: 2,
        head: 'h3',
        children: 'Заголовок H3',
    },
}
