'use client'
import styles from './styles.module.scss';
import { Title } from './title';
import { Btns } from './btns';
import { Input } from './input';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Title/>
            <Input/>
            <Btns/>
        </header>
    )
}
