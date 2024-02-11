import { FC } from 'react'
import styles from './styles.module.css'
import { Copyright } from '../Copyright/Copyright'
import { Social } from '../Social/Social'

export const FooterBottom: FC = () => {
    return (
        <div className={styles.footerBottom}>
            <Copyright />
            <Social />
        </div>
    )
}
