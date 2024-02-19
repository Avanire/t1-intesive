import { FC } from 'react'
import { MenuLink } from '@shared/ui'
import styles from './styles.module.css'

type Props = {
    menuList: Array<{
        id: number
        name: string
        url: string
    }>
}

export const FooterMenu: FC<Props> = (props) => {
    return (
        <nav className={styles.footerMenu}>
            {props.menuList.map((link) => (
                <MenuLink
                    key={link.id}
                    color="rgb(153, 153, 153)"
                    name={link.name}
                    url={link.url}
                />
            ))}
        </nav>
    )
}
