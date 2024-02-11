import { FC } from 'react'
import { DashboardCard, Head } from '../../../../shared/ui'
import styles from './styles.module.css'
import { dashboardCardList } from '../../constants'
import savingsImg from '../../../../assets/images/savings.png'

export const PresentationDashboard: FC = () => {
    return (
        <div className={styles.presentDashboard}>
            <div className={styles.leftBlock}>
                <div className={styles.heading}>
                    <Head highlightNumber={2} head="h2">
                        Control Purchases Via Dashboard
                    </Head>
                </div>
                <div className={styles.dashboardCardList}>
                    {dashboardCardList.map((card, index) => (
                        <DashboardCard
                            key={card.id}
                            image={card.image}
                            name={card.name}
                            status={card.status}
                            time={card.time}
                            theme={index === 0 ? 'Active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.rightBlock}>
                <img
                    src={savingsImg}
                    alt="Purchases Image"
                    className={styles.rightBlockImg}
                    width={534}
                />
            </div>
        </div>
    )
}
