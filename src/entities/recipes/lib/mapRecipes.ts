import { RecipesDto } from '../api/types'

// Pattern Adapter
export function mapRecipes(dto: RecipesDto) {
    return {
        id: dto.id,
        name: dto.name,
        image: dto.image,
    }
}
