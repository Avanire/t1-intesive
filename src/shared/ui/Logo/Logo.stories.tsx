import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
    component: Logo,
    title: 'shared/ui/Logo',
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {}

export const BigLogo: Story = {
    args: {
        size: 'big',
    },
}
