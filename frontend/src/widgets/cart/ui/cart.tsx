'use client'
import clsx from 'clsx';
import styles from './styles.module.scss';
import { useAppSelector } from '@/app/store';
import { CartCard } from './cartCard/cartCard';

export const Cart = () => {

    const cartValue = useAppSelector(s => s.cart.cart)

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2 className={styles.title_text}>Корзина</h2>
                    <p className={clsx(
                        styles.title_value,
                        cartValue.length!==0&&styles.show
                    )}>
                        {cartValue.length}
                    </p>
                </div>
                <div className={styles.cart}>
                    <div className={styles.products}>
                        {
                            cartValue.map(card => (
                                <CartCard
                                    key={card.article}
                                    {...card}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.pay}>

                    </div>
                </div>
            </section>
        </div>
    )
}
