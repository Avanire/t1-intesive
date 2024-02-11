import { FC, useEffect, useState } from 'react'
import quotesIcon from '../../../../assets/images/quotes-icon.png'
import { StarIcon } from '../../../../shared/ui'
import styles from './styles.module.css'
import { formatDistance, parseISO } from 'date-fns'

type Props = {
    extended: boolean
    photo: string
    name: string
    time: string
    feedback: string
    rating: number
}

export const ReviewsCard: FC<Props> = (props) => {
    const [reviewStarCount, setReviewStarCount] = useState<number>(0)

    useEffect(() => {
        if (props.rating < 1) {
            setReviewStarCount(1)
        } else if (props.rating > 5) {
            setReviewStarCount(5)
        } else {
            setReviewStarCount(props.rating)
        }
    }, [props.rating])

    return (
        <div className={styles.reviewCard}>
            {props.extended && (
                <div className={styles.customer}>
                    <img src={props.photo} alt={props.name} />
                    <div>
                        <div className={styles.customerName}>{props.name}</div>
                        <div className={styles.timeWithUs}>
                            {formatDistance(parseISO(props.time), new Date())}{' '}
                            With Us
                        </div>
                    </div>
                    <img
                        src={quotesIcon}
                        alt=""
                        className={styles.quotesIcon}
                    />
                </div>
            )}
            <div className={styles.feedback}>“ {props.feedback} ”</div>
            <div className={styles.stars}>
                {Array(reviewStarCount)
                    .fill(0)
                    .map((_, index) => (
                        <StarIcon key={index} />
                    ))}
            </div>
            <div className={styles.shadow}></div>
        </div>
    )
}
