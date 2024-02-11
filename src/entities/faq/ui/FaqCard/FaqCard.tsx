import { FC, useState } from 'react'
import styles from './styles.module.css'
import minusIcon from '../../../../assets/images/minus.svg'
import plusIcon from '../../../../assets/images/plus.svg'
import cn from 'classnames'

type Props = {
    question: string
    answer: string
}

export const FaqCard: FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className={styles.faqCard}>
            <div
                aria-expanded={isOpen}
                aria-label="FAQ Card"
                onClick={handleClick}
                className={styles.questionBlock}
            >
                <span className={styles.question}>{props.question}</span>
                <div className={styles.iconBlock}>
                    {isOpen ? (
                        <img src={minusIcon} alt="" />
                    ) : (
                        <img src={plusIcon} alt="" />
                    )}
                </div>
            </div>
            <div className={cn(styles.answer, !isOpen && styles.answerToggled)}>
                {props.answer}
            </div>
        </div>
    )
}
