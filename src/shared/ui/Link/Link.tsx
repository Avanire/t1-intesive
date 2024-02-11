import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styles from './styles.module.css'

type Props = {
    url: string
    children: string
    icon?: string
}

export const Link: FC<Props> = (props) => {
    return (
        <RouterLink to={props.url} className={styles.link}>
            {props.children}
            {props.icon && (
                <img src={props.icon} alt="" className={styles.icon} />
            )}
        </RouterLink>
    )
}
