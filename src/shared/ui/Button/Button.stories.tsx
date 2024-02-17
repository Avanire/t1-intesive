import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import '../../../app/index.css'
import arrowIcon from '../../../assets/images/Arrow.svg'
import arrowLeftIcon from '../../../assets/images/arrow-left.svg'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/ui/Button',
    decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: 'Click Me',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Click me',
        theme: 'Secondary',
    },
}

export const WithIcon: Story = {
    args: {
        children: 'Click me',
        theme: 'WithIcon',
        icon: arrowIcon,
    },
}

export const ButtonLikeLink: Story = {
    args: {
        children: 'Click me',
        icon: arrowLeftIcon,
        iconDirect: 'ltr',
        theme: 'Secondary',
        type: 'link',
    },
}
