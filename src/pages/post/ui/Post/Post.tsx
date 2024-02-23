import { FC } from 'react'
import { useParams } from 'react-router'
import { PostDetail, usePostQuery } from '@entities/posts'
import { useGetUserQuery } from '@entities/user'
import styles from './styles.module.css'
import Skeleton from 'react-loading-skeleton'
import { Button } from '@shared/ui'
import arrowLeftIcon from '@assets/images/arrow-left.svg'
import { AddComment } from '@widgets/AddComment/ui/AddComment/AddComment'
import { CommentsList } from '@widgets/CommentsList'

const Post: FC = () => {
    const { id } = useParams()

    const { data: post, isSuccess: postIsSuccess } = usePostQuery(id)
    const { data: user, isSuccess: userIsSuccess } = useGetUserQuery(
        post?.userId
    )

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
                {id && <CommentsList postId={id} />}
            </div>
            <div className={styles.addCommentBlock}>
                {id && post ? (
                    <AddComment postId={id} userId={post.userId} />
                ) : (
                    <Skeleton width="100%" height={345} />
                )}
            </div>
        </section>
    )
}

export default Post
