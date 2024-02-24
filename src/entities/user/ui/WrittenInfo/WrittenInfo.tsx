import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
    photo: string
    fullName: string
}

export const WrittenInfo: FC<Props> = (props) => {
    return (
        <div className={styles.customer}>
            <div className={styles.imageBlock}>
                <img
                    src={props.photo}
                    alt={props.fullName}
                    className={styles.image}
                    width={55}
                />
            </div>
            <div>
                <div>Written By</div>
                <div className={styles.fullName}>{props.fullName}</div>
            </div>
        </div>
    )
}
