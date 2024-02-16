import { FC } from 'react'
import { useParams } from 'react-router'
import { PostDetail, usePostQuery } from '../../../../entities/posts'
import { useGetUserQuery } from '../../../../entities/user'
import styles from './styles.module.css'
import Skeleton from 'react-loading-skeleton'
import { Button, Head } from '../../../../shared/ui'
import arrowLeftIcon from '../../../../assets/images/arrow-left.svg'
import {
    CommentsCard,
    useGetCommentsByPostIdQuery,
} from '../../../../entities/comments'

const Post: FC = () => {
    const { id } = useParams()

    const { data: post, isSuccess: postIsSuccess } = usePostQuery(id)
    const { data: user, isSuccess: userIsSuccess } = useGetUserQuery(
        post?.userId
    )
    const { data: comments, isSuccess: commentsIsSuccess } =
        useGetCommentsByPostIdQuery(id)

    return (
        <section className={styles.post}>
            <div className={styles.detail}>
                {postIsSuccess && userIsSuccess ? (
                    <PostDetail
                        {...post}
                        fullName={user.fullName}
                        photo={user.photo}
                    />
                ) : (
                    <Skeleton width={'100%'} height={350} />
                )}
            </div>
            <div className={styles.btn}>
                <Button
                    type="link"
                    url="/blog"
                    theme="Secondary"
                    icon={arrowLeftIcon}
                    iconDirect="ltr"
                >
                    All Articles
                </Button>
            </div>
            <div className={styles.commentsBlock}>
                <div className={styles.commentsHead}>
                    <Head head="h4">Comments</Head>
                </div>
                <div className={styles.comments}>
                    {commentsIsSuccess ? (
                        comments.map((comment) => (
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
            </div>
        </section>
    )
}

export default Post
