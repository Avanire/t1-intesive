import { CommentsDto } from '../api/types'
import { Comment } from '../model/types'

// Pattern Adapter
export function mapComments(dto: Comment): CommentsDto {
    return {
        id: dto.id,
        username: dto.user.username,
        feedback: dto.body,
        postId: dto.postId,
    }
}
