import { FC, useId } from 'react'
import styles from './styles.module.css'
import starIcon from '../../../../assets/images/Star.svg'
import TextTruncate from 'react-text-truncate'

type Props = {
    title: string
    reactions: number
    tags: Array<string>
    body: string
}

export const PostCategoryCard: FC<Props> = (props) => {
    const id = useId()

    return (
        <div className={styles.categoryPostCard}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.infoBlock}>
                <div>
                    {props.tags.map((item, index) => (
                        <span key={id + index} className={styles.tag}>
                            #{item}
                            {index === props.tags.length - 1 ? '' : ', '}
                        </span>
                    ))}
                </div>
                <div className={styles.ratingBlock}>
                    {props.reactions}
                    <img src={starIcon} alt={`Reactions ${props.reactions}`} />
                </div>
            </div>
            <div className={styles.body}>
                <TextTruncate
                    line={3}
                    element="div"
                    truncateText="..."
                    text={props.body}
                />
            </div>
        </div>
    )
}
