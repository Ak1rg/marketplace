'use client'
import Image from 'next/image'
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';

export const Btns = () => {

    const navigate = useRouter()

    const goToThe = (e:string) => {
        navigate.push(e)
    }

    return (
        <div className={styles.btns}>
            <button className={styles.btn} onClick={() => goToThe('profile')}>
                <Image width={30} height={30} src='/profile.svg' alt={'icon profile'}/>
                <span>Профиль</span>
            </button>
            <button className={styles.btn} onClick={() => goToThe('follows')}>
                <Image width={30} height={30} src='/heart.svg' alt={'icon heart'}/>
                <span>Избранное</span>
            </button>
            <button className={styles.btn} onClick={() => goToThe('cart')}>
                <Image width={30} height={30} src='/cart.svg' alt={'icon cart'}/>
                <span>Корзина</span>
            </button>
        </div>
    )
}
