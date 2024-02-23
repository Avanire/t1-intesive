export { CommentsCard } from './ui/CommentsCard/CommentsCard'
export {
    useAllCommentsQuery,
    useGetCommentsByPostIdQuery,
} from './api/commentsApi'
export {
    commentsSlice,
    commentsSelector,
    resetCommentsByPost,
} from './model/slice'
