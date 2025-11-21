import { memo } from 'react'
import styles from './styles.module.scss';
import { useAppDispatch } from '@/app/store';
import { changeQuantity } from '../../model/cartSlice';
import Image from 'next/image';

interface IProps {
    q:number 
    article:number 
}

const Count = ({q,article}:IProps) => {

    const dispatch = useAppDispatch()

    const changeCount = (act:'+'|'-') => {
        dispatch(changeQuantity({act,article}))
    }

    return (
        <div className={styles.count}>
            <button 
                className={styles.count_change}
                onClick={() => changeCount('-')}
            >
                <Image
                    width={16}
                    height={16}
                    src={'/minus.svg'}
                    alt={'minus icon'}
                />
            </button>
            <p className={styles.quantity}>{q}</p>
            <button 
                className={styles.count_change}
                onClick={() => changeCount('+')}
            >
                <Image
                    width={16}
                    height={16}
                    src={'/plus.svg'}
                    alt={'plus icon'}
                />
            </button>
        </div>
    )
}

export const CountModule = memo(Count)
