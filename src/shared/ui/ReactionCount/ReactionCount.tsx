import { FC } from 'react'
import styles from './styles.module.css'
import starIcon from '@assets/images/Star.svg'

type Props = {
    count: number
}

export const ReactionCount: FC<Props> = (props) => {
    return (
        <div className={styles.ratingBlock}>
            {props.count}
            <img src={starIcon} alt={`Reactions ${props.count}`} />
        </div>
    )
}
