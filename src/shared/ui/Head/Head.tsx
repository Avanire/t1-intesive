import { createElement, FC } from 'react'
import styles from './styles.module.css'

export type Props = {
    children: string
    highlightNumber?: number
    head: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Head: FC<Props> = (props) => {
    const wordsList = props.children.split(' ')

    return createElement(
        props.head,
        { className: styles[props.head] },
        wordsList.map((word, index) =>
            index + 1 === props.highlightNumber ? (
                <span key={index} className={styles.highlight}>
                    {word + ' '}
                </span>
            ) : (
                word + ' '
            )
        )
    )
}
