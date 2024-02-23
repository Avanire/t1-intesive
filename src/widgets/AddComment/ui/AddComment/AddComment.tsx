import { FC, SyntheticEvent, useState } from 'react'
import styles from './styles.module.css'
import { Button, Head, TextArea } from '@shared/ui'
import { useAddCommentMutation } from '@entities/comments/api/commentsApi'
import { validateComment } from '@widgets/AddComment/validate'

type Props = {
    postId: string | number
    userId: string | number
}

export const AddComment: FC<Props> = (props) => {
    const [comment, setComment] = useState('')
    const [error, setError] = useState<string | false>(false)

    const [addComment] = useAddCommentMutation()

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validated = validateComment(comment)

        if (validated === true) {
            setError(false)

            const body = {
                body: comment,
                postId: props.postId,
                userId: props.userId,
            }

            try {
                await addComment(JSON.stringify(body)).unwrap()
                setComment('')
            } catch (err) {
                console.error(err)
            }
        } else {
            setError(validated)
        }
    }

    return (
        <>
            <div className={styles.addCommentHead}>
                <Head head="h3" highlightNumber={2}>
                    Add comment
                </Head>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.commentTextarea}>
                    {error && <div className={styles.error}>{error}</div>}
                    <TextArea
                        placeholder="Enter your comment"
                        height={345}
                        name="body"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <Button extraClass={styles.addCommentBtn}>Send</Button>
            </form>
        </>
    )
}
