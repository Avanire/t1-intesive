import { FC } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

type Props = {
    size: 'small' | 'big'
}

export const Logo: FC<Props> = ({ size = 'small' }) => {
    const imgSize = size === 'small' ? '46' : '62'
    const descriptionSize = size === 'small' ? '21px' : '28px'

    return (
        <Link to="/" className={styles.logo}>
            <img
                src="/images/logo.svg"
                alt="logo eatly"
                className={styles.logoImg}
                width={imgSize}
            />
            <span
                className={styles.logoDescr}
                style={{ fontSize: descriptionSize }}
            >
                eatly
            </span>
        </Link>
    )
}
