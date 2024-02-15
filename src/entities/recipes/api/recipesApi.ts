import { baseApi } from '../../../shared/api'
import { Recipes } from '../model/types'

const recipesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getRecipesByMealType: build.query<Recipes, string>({
            query: (name) => `recipes/meal-type/${name}`,
        }),
    }),
})

export const { useGetRecipesByMealTypeQuery } = recipesApi
