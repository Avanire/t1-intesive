import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

type Props = {
    color: string
    name: string
    url: string
}

export const MenuLink: FC<Props> = (props) => {
    return props.url.includes('#') ? (
        <a
            href={props.url}
            style={{ color: props.color }}
            className={styles.menuLink}
        >
            {props.name}
        </a>
    ) : (
        <Link
            to={props.url}
            style={{ color: props.color }}
            className={styles.menuLink}
        >
            {props.name}
        </Link>
    )
}
