import { FC } from 'react'
import { Head } from '../../../../shared/ui'
import styles from './styles.module.css'
import { ReviewsCard } from '../../../../entities/reviews'
import { reviewsList } from '../../constants'
import divider from '../../../../assets/images/divider.png'

export const Reviews: FC = () => {
    return (
        <div>
            <div className={styles.heading}>
                <Head highlightNumber={1} head="h3">
                    Customer Say
                </Head>
            </div>
            <div className={styles.reviewSlider}>
                <div className={styles.reviewSlides}>
                    {reviewsList.map((review, index) => (
                        <ReviewsCard
                            key={review.id}
                            extended={index === 0}
                            photo={review.photo}
                            name={review.name}
                            time={review.createdAt}
                            feedback={review.feedback}
                            rating={review.rating}
                        />
                    ))}
                </div>
                <div className={styles.divider}>
                    <img src={divider} alt="" />
                </div>
            </div>
        </div>
    )
}
