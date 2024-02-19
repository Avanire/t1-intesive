import { FC } from 'react'
import styles from './styles.module.css'
import { FooterBottom, FooterTop } from '@widgets/LayoutFooter'

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
