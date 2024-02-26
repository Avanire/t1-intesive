import { FC, MouseEvent, ReactNode } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'

type ButtonTheme = 'Primary' | 'Secondary' | 'WithIcon'

type Props = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
    theme?: ButtonTheme
    type?: 'submit' | 'button' | 'link'
    url?: string
    icon?: string
    iconDirect?: 'ltr' | 'rtr'
    extraClass?: string
}

export const Button: FC<Props> = ({
    onClick,
    children,
    theme = 'Primary',
    type = 'submit',
    icon,
    iconDirect = 'rtr',
    url,
    extraClass,
}) => {
    return type === 'link' ? (
        <Link
            to={url ? url : '#'}
            className={cn(
                styles.button,
                styles[`buttonTheme${theme}`],
                extraClass
            )}
        >
            {icon && iconDirect === 'ltr' && <img src={icon} alt="" />}
            {children}
            {icon && iconDirect === 'rtr' && <img src={icon} alt="" />}
        </Link>
    ) : (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                styles.button,
                styles[`buttonTheme${theme}`],
                extraClass
            )}
        >
            {icon && iconDirect === 'ltr' && <img src={icon} alt="" />}
            {children}
            {icon && iconDirect === 'rtr' && <img src={icon} alt="" />}
        </button>
    )
}
