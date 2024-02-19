import { FC } from 'react'
import { Menu } from '@widgets/LayoutHeader'
import { Logo } from '@shared/ui'
import styles from './styles.module.css'
import { menu } from '../../constants'

export const LayoutHeader: FC = () => {
    return (
        <header className={styles.header}>
            <Logo size="small" />
            <Menu menuList={menu} />
        </header>
    )
}
