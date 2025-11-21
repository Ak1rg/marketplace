import { ICartCard, removeFromCart } from '../../model/cartSlice';
import styles from './styles.module.scss';
import { useAppDispatch } from '@/app/store';
import { memo, useCallback } from 'react';
import { CountModule } from './CountModule';
import { ImageModule } from './ImageModule';
import { NameModule } from './NameModule';

const CartCardComponent = ({
    article,
    name,
    img,
    price,
    quantity,
}:ICartCard) => {

    const dispatch = useAppDispatch()

    const removeProductFromCart = useCallback(() => {
        dispatch(removeFromCart(article))
    },[article,dispatch])

    return (
        <div className={styles.card}>
            <ImageModule src={img}/>
            <NameModule oc={removeProductFromCart} name={name}/>
            <div className={styles.price}>
                {price} c
            </div>
            <CountModule q={quantity} article={article}/>
        </div>
    )
}


export const CartCard = memo(CartCardComponent)