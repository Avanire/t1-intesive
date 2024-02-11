import { FC } from 'react'
import starIcon from '../../../../assets/images/Star.svg'
import bookmarkIcon from '../../../../assets/images/Book-Mark.svg'
import styles from './styles.module.css'

type Props = {
    image: string
    type: string
    name: string
    time: string
    rating: number
}

export const RecipesCard: FC<Props> = (props) => {
    return (
        <div className={styles.recipesCard}>
            <div className={styles.imageBlock}>
                <img
                    src={props.image}
                    alt={props.name}
                    className={styles.image}
                    width={396}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.type}>{props.type}</div>
                <div className={styles.headingBlock}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.favorite}>
                        <img src={bookmarkIcon} alt="" />
                    </div>
                </div>
                <div className={styles.bottomBlock}>
                    <span className={styles.time}>{props.time}</span>
                    <span className={styles.separator}></span>
                    <span className={styles.ratingBlock}>
                        <img src={starIcon} alt="" />
                        <span>{props.rating}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
