import { FC, useEffect } from 'react'
import styles from './styles.module.css'
import { Head } from '@shared/ui'
import {
    CommentsCard,
    commentsSelector,
    resetCommentsByPost,
    useGetCommentsByPostIdQuery,
} from '@entities/comments'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '@shared/model'

type Props = {
    postId: string
}

export const CommentsList: FC<Props> = ({ postId }) => {
    const dispatch = useAppDispatch()

    const { isSuccess, refetch } = useGetCommentsByPostIdQuery(postId)

    const { commentsByPost = [] } = useAppSelector(commentsSelector)

    useEffect(() => {
        if (commentsByPost.length === 0) {
            refetch()
        }

        return () => {
            dispatch({
                type: resetCommentsByPost.type,
            })
        }
    }, [])

    return (
        <>
            <div className={styles.commentsHead}>
                <Head head="h4">Comments</Head>
            </div>
            <div className={styles.comments}>
                {isSuccess ? (
                    commentsByPost.map((comment) => (
                        <div key={comment.id} className={styles.comment}>
                            <CommentsCard
                                name={comment.username}
                                feedback={comment.feedback}
                                extended="Extended"
                            />
                        </div>
                    ))
                ) : (
                    <Skeleton
                        width={'100%'}
                        height={218}
                        count={3}
                        containerClassName={styles.commentsSkeleton}
                    />
                )}
            </div>
        </>
    )
}
