import { FC } from 'react'
import { useParams } from 'react-router'
import { PostDetail, usePostWithUserQuery } from '@entities/posts'
import styles from './styles.module.css'
import Skeleton from 'react-loading-skeleton'
import { Button } from '@shared/ui'
import arrowLeftIcon from '@assets/images/arrow-left.svg'
import { AddComment } from '@widgets/AddComment/ui/AddComment/AddComment'
import { CommentsList } from '@widgets/CommentsList'

const Post: FC = () => {
    const { id } = useParams()

    const { data, isSuccess } = usePostWithUserQuery(id)

    return (
        <section className={styles.post}>
            <div className={styles.detail}>
                {isSuccess ? (
                    <PostDetail
                        {...data.post}
                        fullName={data.user.fullName}
                        photo={data.user.photo}
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
                {id && data?.post ? (
                    <AddComment postId={id} userId={data.post.userId} />
                ) : (
                    <Skeleton width="100%" height={345} />
                )}
            </div>
        </section>
    )
}

export default Post
