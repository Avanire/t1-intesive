import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

type Props = {
    headerSlot: ReactNode
    footerSlot: ReactNode
}

export const Layout: FC<Props> = (props) => {
    return (
        <div className={styles.root}>
            {props.headerSlot}
            <main className={styles.container}>
                <Outlet />
            </main>
            {props.footerSlot}
        </div>
    )
}
