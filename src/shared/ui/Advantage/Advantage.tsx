import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
    title: string
    description: string
}

export const Advantage: FC<Props> = (props) => {
    return (
        <div className={styles.advantage}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}
