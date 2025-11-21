import Image from 'next/image'
import { memo} from 'react'
import styles from './styles.module.scss';

const ImageComponent = ({src}:{src:string}) => {
    return (
        <Image
            className={styles.img}
            width={140}
            height={180}
            src={src}
            alt={'product img'}
        />
    )
}

export const ImageModule = memo(ImageComponent)
