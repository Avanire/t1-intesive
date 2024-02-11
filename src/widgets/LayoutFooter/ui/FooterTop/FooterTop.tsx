import { FC } from 'react'
import { Logo } from '../../../../shared/ui'
import { FooterMenu } from '../FooterMenu/FooterMenu'
import { footerMenuList } from '../../constants'
import styles from './styles.module.css'

export const FooterTop: FC = () => {
    return (
        <div className={styles.footerTop}>
            <div>
                <Logo size="big" />
            </div>
            <div>
                <FooterMenu menuList={footerMenuList} />
            </div>
        </div>
    )
}
