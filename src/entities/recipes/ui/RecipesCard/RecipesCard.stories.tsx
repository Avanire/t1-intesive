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
        id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        tags: recipe.type,
        cookTimeMinutes: recipe.time,
        rating: recipe.rating,
    },
}
