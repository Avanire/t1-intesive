import { UserDto } from '../api/types'
import { User } from '../model/types'

// Pattern Adapter
export function transformUser(dto: User): UserDto {
    return {
        id: dto.id,
        fullName: `${dto.firstName} ${dto.lastName}`,
        photo: dto.image,
    }
}
