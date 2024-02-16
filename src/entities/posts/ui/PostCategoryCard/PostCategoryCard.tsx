import { FC, useId } from 'react'
import styles from './styles.module.css'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'
import { HashTag, ReactionCount } from '../../../../shared/ui'

type Props = {
    id: number
    title: string
    reactions: number
    tags: Array<string>
    body: string
}

export const PostCategoryCard: FC<Props> = (props) => {
    const id = useId()

    return (
        <Link to={`/blog/${props.id}`} className={styles.categoryPostCard}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.infoBlock}>
                <div>
                    {props.tags.map((item, index) => (
                        <HashTag
                            key={id + index}
                            name={item}
                            lastItem={index === props.tags.length - 1}
                        />
                    ))}
                </div>
                <ReactionCount count={props.reactions} />
            </div>
            <div className={styles.body}>
                <TextTruncate
                    line={3}
                    element="div"
                    truncateText="..."
                    text={props.body}
                />
            </div>
        </Link>
    )
}
