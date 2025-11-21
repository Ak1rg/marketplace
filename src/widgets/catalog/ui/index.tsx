import { Card } from './card/card';
import styles from './styles.module.scss';

export const Catalog = () => {

    const array = [
        {
            article: 100001,
            name: 'Alibek',
            price: 1299,
            rating: 4.7,
            reviews: 12,
            img:'/book.png',
            weight:1,
        },
        {
            article: 100002,
            name: 'Dana',
            price: 2599,
            rating: 4.5,
            reviews: 8,
            img:'/book.png',
            weight:1,
        },
        {
            article: 100003,
            name: 'Aruzhan',
            price: 3499,
            rating: 4.9,
            reviews: 25,
            img:'/book.png',
            weight:1,
        },
        {
            article: 100004,
            name: 'Miras',
            price: 1799,
            rating: 4.3,
            reviews: 5,
            img:'/book.png',
            weight:1,
        },
        {
            article: 100005,
            name: 'Yerbol',
            price: 4999,
            rating: 4.8,
            reviews: 18,
            img:'/book.png',
            weight:1,
        },
        {
            article: 100006,
            name: 'Aigerim',
            price: 3999,
            rating: 4.6,
            reviews: 9,
            img:'/book.png',
            weight:1,
        },
    ]

    return (
        <section className={styles.catalog}>
            {
                array.map((card) => (
                    <Card
                        key={card.article}
                        {...card}
                    />
                ))
            }
        </section>
    )
}
