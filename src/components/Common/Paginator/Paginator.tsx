import React, {useState} from "react";
import styles from './Paginator.module.css'
import {v1} from "uuid";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator = ({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              onPageChanged,
                              portionSize = 10
                          }: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize


    return <div className={styles.paginator}>

        {portionNumber > 1 &&
        <span>
            <button onClick={() => setPortionNumber(portionNumber - 1)}>
                PREV
            </button>
            ...
        </span>}

        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => <button
                className={currentPage === p ? styles.selectedPage : ''}
                key={v1()}
                onClick={() => {
                    onPageChanged(p)
                }}>{p}</button>
            )}

        {portionCount > portionNumber &&
        <span>
            ...
            <button onClick={() => setPortionNumber(portionNumber + 1)}>
                NEXT
            </button>
        </span>}
    </div>
}