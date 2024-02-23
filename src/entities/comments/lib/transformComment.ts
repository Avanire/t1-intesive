import { CommentsDto } from '@entities/comments/api/types'
import { Comment } from '@entities/comments/model/types'

export const transformComment = (comment: Comment): CommentsDto => {
    return {
        id: comment.id,
        username: comment.user.username,
        feedback: comment.body,
        postId: comment.postId,
    }
}
