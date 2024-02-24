import { FC, useId } from 'react'
import { HashTag, Head, ReactionCount } from '@shared/ui'
import styles from './styles.module.css'
import { WrittenInfo } from '@entities/user'

type Props = {
    id: number
    title: string
    body: string
    tags: Array<string>
    reactions: number
    fullName: string
    photo: string
}

export const PostDetail: FC<Props> = (props) => {
    const id = useId()

    return (
        <>
            <div className={styles.heading}>
                <Head head="h2">{props.title}</Head>
            </div>
            <div className={styles.infoBlock}>
                <WrittenInfo photo={props.photo} fullName={props.fullName} />
                <div className={styles.reactionsBlock}>
                    <ReactionCount count={props.reactions} />
                    <div>
                        {props.tags.map((item, index) => (
                            <HashTag
                                key={id + index}
                                name={item}
                                lastItem={index === props.tags.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.bodyText}>{props.body}</div>
        </>
    )
}
