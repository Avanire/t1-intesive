import { FC } from 'react'
import { Head } from '@shared/ui'
import styles from './styles.module.css'
import { FaqCard } from '@entities/faq'
import { faqList } from '../../constants'

export const FAQ: FC = () => {
    return (
        <div>
            <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                    <Head highlightNumber={3} head="h3">
                        Frequently Asked Questions
                    </Head>
                </div>
            </div>
            <div className={styles.faqList}>
                {faqList.map((item) => (
                    <FaqCard
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    )
}
