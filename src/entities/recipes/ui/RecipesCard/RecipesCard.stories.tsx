import { Meta, StoryObj } from '@storybook/react'
import { RecipesCard } from './RecipesCard'
import { topRecipesList } from '../../constants'

const meta: Meta<typeof RecipesCard> = {
    component: RecipesCard,
    title: 'entities/recipes/ui/RecipesCard',
}

export default meta

type Story = StoryObj<typeof RecipesCard>

const recipe = topRecipesList[0]

export const Default: Story = {
    args: {
        image: recipe.image,
        type: recipe.type,
        name: recipe.name,
        time: recipe.time,
        rating: recipe.rating,
    },
}
