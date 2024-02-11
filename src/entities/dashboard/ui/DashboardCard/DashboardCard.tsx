import { FC } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

type Props = {
    image: string
    name: string
    status: string
    time: string
    theme?: 'Active' | ''
}

export const DashboardCard: FC<Props> = (props) => {
    return (
        <div
            className={cn(
                styles.dashboardCard,
                styles[`dashboardCard${props.theme}`]
            )}
        >
            <div className={styles.info}>
                <img src={props.image} alt={props.name} width="78" />
                <div>
                    <h4 className={styles.title}>{props.name}</h4>
                    <span
                        className={cn(
                            styles.status,
                            props.status === 'Cancelled' &&
                                styles.statusCancelled
                        )}
                    >
                        {props.status}
                    </span>
                </div>
            </div>
            <div className={styles.time}>{props.time}</div>
        </div>
    )
}
