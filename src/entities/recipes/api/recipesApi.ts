import { topRecipesList } from '../constants'

type RecipesApi = {
    data: typeof topRecipesList
    isLoading: boolean
}

const recipesApi = (): RecipesApi => {
    return {
        data: topRecipesList,
        isLoading: false,
    }
}

export const useTopRecipesQuery = recipesApi
