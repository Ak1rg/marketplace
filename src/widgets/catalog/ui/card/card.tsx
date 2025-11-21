'use client'
import Image from 'next/image';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/store';
import { addToCart, ICartCard } from '@/widgets/cart/model/cartSlice';

export interface ICard {
    article:number 
    name:string 
    price:number 
    img:string 
    rating:number 
    reviews:number 
    weight:number
}

export const Card = ({
    article,
    name,
    price,
    rating,
    reviews,
    img,
    weight,
}:ICard) => {

    const navigate = useRouter()
    const dispatch = useAppDispatch()

    const goToTheProduct = () => {
        navigate.push(`/${String(article)}/`)
    }

    const addToTheCart = () => {
        const cartItem:ICartCard = {
            article,
            name,
            img,
            price,
            weight,
            rating,
            reviews,
            quantity: 1,
        }
        dispatch(addToCart(cartItem))
    }

    return (
        <div className={styles.card}>
            <Image 
                onClick={goToTheProduct}
                height={400}
                width={320}
                className={styles.img}
                src={img}
                alt='image for card'
            />
            <p className={styles.price}>{price} с</p>
            <p onClick={goToTheProduct} className={styles.name}>{name}</p>
            <div className={styles.rating}>
                <div className={styles.bunch}>
                    <Image height={22} width={22} src='/star.svg' alt='star of card'/>
                    <b className={styles.number}>{rating}</b>
                </div>
                <div className={styles.bunch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 1.5 14 14"  
                        className="p6b3_0_1-a5"
                        style={{ color: "rgba(0, 26, 52, 0.4)" }}
                        >
                        <path
                            fill="currentColor"
                            d="M8.545 13C11.93 13 14 11.102 14 8s-2.07-5-5.455-5C5.161 3 3.091 4.897 3.091 8c0 1.202.31 2.223.889 3.023-.2.335-.42.643-.656.899-.494.539-.494 1.077.494 1.077.89 0 1.652-.15 2.308-.394.703.259 1.514.394 2.42.394"
                        />
                    </svg>
                    <p className={styles.review}>{reviews}</p>
                </div>
            </div>
            <button 
                className={styles.btn} 
                onClick={addToTheCart}
            >
                Добавить в корзину
            </button>
        </div>
    )
}
