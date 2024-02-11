import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
    title: string
}

export const Subtitle: FC<Props> = (props) => {
    return (
        <div className={styles.subtitle}>
            <span className={styles.separator}></span>
            <span className={styles.title}>{props.title}</span>
        </div>
    )
}
