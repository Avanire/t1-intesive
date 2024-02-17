import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta<typeof Logo> = {
    component: Logo,
    title: 'shared/ui/Logo',
    decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {}

export const BigLogo: Story = {
    args: {
        size: 'big',
    },
}
