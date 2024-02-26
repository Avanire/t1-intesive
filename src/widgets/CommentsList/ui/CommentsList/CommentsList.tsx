import { FC } from 'react'
import styles from './styles.module.css'
import { Head } from 'shared/ui'
import {
    CommentsCard,
    commentsSelector,
    useGetCommentsByPostIdQuery,
} from 'entities/comments'
import Skeleton from 'react-loading-skeleton'
import { useAppSelector } from 'shared/model'

type Props = {
    postId: string
}

export const CommentsList: FC<Props> = ({ postId }) => {
    const { isSuccess } = useGetCommentsByPostIdQuery(postId, {
        refetchOnMountOrArgChange: true,
    })

    const { commentsByPost = [] } = useAppSelector(commentsSelector)

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
