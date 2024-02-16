import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
    name: string
    lastItem: boolean
}

export const HashTag: FC<Props> = (props) => {
    return (
        <span className={styles.tag}>
            #{props.name}
            {props.lastItem ? '' : ', '}
        </span>
    )
}
