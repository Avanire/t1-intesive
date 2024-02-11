import { FC } from 'react'
import styles from './styles.module.css'
import { advantageList } from '../../constants'
import { Advantage } from '../../../../shared/ui'

export const Advantages: FC = () => {
    return (
        <div className={styles.advantages}>
            <div className={styles.advantageBg}></div>
            {advantageList.map((advantage) => (
                <div key={advantage.id} className={styles.advantage}>
                    <Advantage
                        title={advantage.title}
                        description={advantage.description}
                    />
                </div>
            ))}
        </div>
    )
}
