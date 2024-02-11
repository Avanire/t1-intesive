import { FC } from 'react'
import styles from './styles.module.css'
import card from '../../../../assets/images/Food-Image.png'
import graph from '../../../../assets/images/Graph.png'
import { DashboardCard } from '../../../../entities/dashboard'

export const BannerImage: FC = () => {
    return (
        <div className={styles.bannerImage}>
            <div className={styles.dashboardCardBlock}>
                <DashboardCard
                    name="Chicken Hell"
                    status="On The Way"
                    image={card}
                    time="3:09 PM"
                    theme="Active"
                />
            </div>
            <div className={styles.graph}>
                <img src={graph} alt="" />
            </div>
        </div>
    )
}
