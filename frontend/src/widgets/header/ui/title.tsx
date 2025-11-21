'use client'
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

export const Title = () => {

    const navigate = useRouter()
    
    const goToThe = (e:string) => {
        navigate.push(e)
    }

    return (
        <>
            <h1 className={styles.title} onClick={() => goToThe('/')}>Market</h1>
        </>
    )
}
