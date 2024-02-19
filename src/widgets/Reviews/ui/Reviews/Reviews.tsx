import { FC, useMemo } from 'react'
import { Head } from '@shared/ui'
import styles from './styles.module.css'
import {
    CommentsCard,
    commentsSelector,
    useAllCommentsQuery,
} from '@entities/comments'
import { useAppSelector } from '@shared/model'
import Slider from 'react-slick'
import './style.css'
import Skeleton from 'react-loading-skeleton'

export const Reviews: FC = () => {
    const { isLoading } = useAllCommentsQuery()

    const { comments = [] } = useAppSelector(commentsSelector)

    const firstSixComments = useMemo(() => comments.slice(0, 6), [comments])

    const settingsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div>
            <div className={styles.heading}>
                <Head highlightNumber={1} head="h3">
                    Customer Say
                </Head>
            </div>
            {isLoading ? (
                <Skeleton width={'100%'} height={150} />
            ) : (
                <Slider {...settingsSlider}>
                    {firstSixComments.map((comment) => (
                        <CommentsCard
                            key={comment.id}
                            name={comment.username}
                            feedback={comment.feedback}
                        />
                    ))}
                </Slider>
            )}
        </div>
    )
}
