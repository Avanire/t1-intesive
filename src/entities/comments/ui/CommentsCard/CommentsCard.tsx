import { FC } from 'react'
import quotesIcon from '../../../../assets/images/quotes-icon.png'
import styles from './styles.module.css'

type Props = {
    extended: boolean
    name: string
    feedback: string
}

export const CommentsCard: FC<Props> = (props) => {
    return (
        <div className={styles.reviewCard}>
            {props.extended && (
                <div className={styles.customer}>
                    <div className={styles.customerName}>{props.name}</div>
                    <img
                        src={quotesIcon}
                        alt=""
                        className={styles.quotesIcon}
                        width={59}
                    />
                </div>
            )}
            <div className={styles.feedback}>{props.feedback}</div>
        </div>
    )
}
