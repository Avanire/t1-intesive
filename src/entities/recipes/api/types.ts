export type RecipesDto = {
    recipes: {
        caloriesPerServing: number
        cookTimeMinutes: number
        cuisine: string
        difficulty: 'Easy' | 'Medium' | 'Hard'
        id: number
        image: string
        ingredients: Array<string>
        instructions: Array<string>
        mealType: Array<'Lunch' | 'Dinner' | 'Snacks'>
        name: string
        prepTimeMinutes: number
        rating: number
        reviewCount: number
        servings: number
        tags: Array<string>
        userId: number
    }[]
    limit: number
    skip: number
    total: number
}
