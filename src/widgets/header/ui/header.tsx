'use client'
import Image from 'next/image';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { clearSearchLine, setSearchLine } from '../model/headerSlice';
import { ChangeEvent } from 'react';
import clsx from 'clsx';

export const Header = () => {

    const dispatch = useAppDispatch()

    const searchInputValue = useAppSelector(s => s.header.searchLine)

    const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchLine(e.target.value))
    }

    const clearSearch = () => {
        dispatch(clearSearchLine())
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Market</h1>
            <div className={styles.search}>
                <div className={styles.search_bunch}>
                    <input 
                        type="text"
                        onChange={inputChange}
                        value={searchInputValue}
                        className={styles.line}
                    />
                    <Image 
                        className={clsx(
                            styles.search_cross,
                            searchInputValue.length!==0&&styles.show
                        )}
                        onClick={clearSearch}
                        width={20}
                        height={20}
                        src='/cross.svg'
                        alt={'icon search cross'}
                    />
                </div>
                <button className={styles.btn_search}>
                    <Image width={30} height={30} src='/search_icon.svg' alt={'icon search'}/>
                </button>
            </div>
            <div className={styles.btns}>
                <button className={styles.btn}>
                    <Image width={30} height={30} src='/profile.svg' alt={'icon profile'}/>
                    <span>Профиль</span>
                </button>
                <button className={styles.btn}>
                    <Image width={30} height={30} src='/heart.svg' alt={'icon heart'}/>
                    <span>Избранное</span>
                </button>
                <button className={styles.btn}>
                    <Image width={30} height={30} src='/cart.svg' alt={'icon cart'}/>
                    <span>Корзина</span>
                </button>
            </div>
        </header>
    )
}
