import { FC } from 'react'
import { getYear } from 'date-fns'
import styles from './styles.module.css'

export const Copyright: FC = () => {
    return (
        <span className={styles.copyright}>
            © {getYear(new Date())} EATLY All Rights Reserved.
        </span>
    )
}
