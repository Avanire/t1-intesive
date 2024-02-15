import { type RecipesDto } from '../api/types'
import { type Recipe } from '../model/types'

// Pattern Adapter
export function mapRecipes(dto: Recipe): RecipesDto {
    return {
        id: dto.id,
        name: dto.name,
        image: dto.image,
        tags: dto.tags,
        cookTimeMinutes: dto.cookTimeMinutes,
        rating: dto.rating,
    }
}
