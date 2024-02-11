import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
    list: Array<string>
}

export const LinkedList: FC<Props> = (props) => {
    return (
        <ul className={styles.ul}>
            {props.list.map((li, index) => (
                <li key={index} className={styles.li}>
                    {li}
                </li>
            ))}
        </ul>
    )
}
