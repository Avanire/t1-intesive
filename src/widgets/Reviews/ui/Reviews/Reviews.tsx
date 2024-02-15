import { FC, useMemo } from 'react'
import { Head } from '../../../../shared/ui'
import styles from './styles.module.css'
import {
    CommentsCard,
    commentsSelector,
    useAllCommentsQuery,
} from '../../../../entities/comments'
import divider from '../../../../assets/images/divider.png'
import { useAppSelector } from '../../../../shared/model'

export const Reviews: FC = () => {
    useAllCommentsQuery()

    const { comments = [] } = useAppSelector(commentsSelector)

    const firstSixComments = useMemo(() => comments.slice(0, 6), [comments])

    return (
        <div>
            <div className={styles.heading}>
                <Head highlightNumber={1} head="h3">
                    Customer Say
                </Head>
            </div>
            <div className={styles.reviewSlider}>
                <div className={styles.reviewSlides}>
                    {firstSixComments.map((comment, index) => (
                        <CommentsCard
                            key={comment.id}
                            extended={index === 0}
                            name={comment.username}
                            feedback={comment.feedback}
                        />
                    ))}
                </div>
                <div className={styles.divider}>
                    <img
                        src={divider}
                        alt=""
                        width={667}
                        className={styles.dividerImg}
                    />
                </div>
            </div>
        </div>
    )
}
