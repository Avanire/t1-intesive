import { FC } from 'react'
import styles from './styles.module.css'
import { FooterTop } from '../FooterTop/FooterTop'
import { FooterBottom } from '../FooterBottom/FooterBottom'

export const LayoutFooter: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.bg}></div>
            <div className={styles.footerWrapper}>
                <FooterTop />
                <FooterBottom />
            </div>
        </footer>
    )
}
