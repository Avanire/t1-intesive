import { FC, MouseEvent, ReactNode } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

type ButtonTheme = 'Primary' | 'Secondary' | 'WithIcon'

type Props = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
    theme?: ButtonTheme
    type?: 'submit' | 'button'
    icon?: string
}

export const Button: FC<Props> = ({
    onClick,
    children,
    theme = 'Primary',
    type = 'submit',
    icon,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(styles.button, styles[`buttonTheme${theme}`])}
        >
            {children}
            {icon && <img src={icon} alt="" />}
        </button>
    )
}
