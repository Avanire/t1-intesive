import { baseApi } from '@shared/api'
import { Recipes } from '../model/types'
import { mapRecipes } from '../lib/mapRecipes'
import { RecipesDto } from './types'

export const recipesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        recipesByMealType: build.query<RecipesDto[], string>({
            query: (name) => ({
                url: `recipes/meal-type/${name}`,
            }),
            transformResponse: (response: Recipes) =>
                response.recipes.map(mapRecipes),
        }),
    }),
})

export const { useRecipesByMealTypeQuery } = recipesApi
