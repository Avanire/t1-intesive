export type Recipes = {
    recipes: {
        id: number
        name: string
        mealType: Array<string>
    }[]
    total: number
    skip: number
    limit: number
}
