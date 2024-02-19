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

export const Menu: FC<Props> = (props) => {
    return (
        <nav className={styles.headerMenu}>
            {props.menuList.map((link) => (
                <MenuLink
                    key={link.id}
                    color="rgb(96, 96, 96)"
                    name={link.name}
                    url={link.url}
                />
            ))}
        </nav>
    )
}
