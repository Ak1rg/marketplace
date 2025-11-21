'use client'
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { clearSearchLine, setSearchLine } from '../model/headerSlice';
import { ChangeEvent, useCallback,  } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export const Input = () => {

    const dispatch = useAppDispatch()

    const searchInputValue = useAppSelector(s => s.header.searchLine)

    const inputChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchLine(e.target.value))
    },[dispatch])

    const clearSearch = useCallback(() => {
        dispatch(clearSearchLine())
    },[dispatch])

    return (
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
    )
    
}