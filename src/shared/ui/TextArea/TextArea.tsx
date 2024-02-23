import { ChangeEventHandler, FC } from 'react'
import styles from './styles.module.css'

type Props = {
    placeholder?: string
    height: number
    name: string
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    value: string
}

export const TextArea: FC<Props> = (props) => {
    return (
        <textarea
            id={props.name}
            name={props.name}
            placeholder={props.placeholder || ''}
            style={{ height: props.height }}
            className={styles.textarea}
            onChange={props.onChange}
            value={props.value}
        ></textarea>
    )
}
