import { FC } from 'react'
import quotesIcon from '@assets/images/quotes-icon.png'
import styles from './styles.module.css'
import cn from 'classnames'

type Props = {
    name: string
    feedback: string
    extended?: 'Extended'
}

export const CommentsCard: FC<Props> = (props) => {
    return (
        <div className={styles.commentCard}>
            <div
                className={cn(
                    styles.customer,
                    'review-card__head',
                    styles[`customer${props.extended}`]
                )}
            >
                <div className={styles.customerName}>{props.name}</div>
                <img
                    src={quotesIcon}
                    alt=""
                    className={styles.quotesIcon}
                    width={59}
                />
            </div>
            <div className={styles.feedback}>{props.feedback}</div>
        </div>
    )
}
