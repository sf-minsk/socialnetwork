import React from "react";
import styles from './Paginator.module.css'
import {v1} from "uuid";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              onPageChanged
                          }: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => <button key={v1()} className={currentPage === p ? styles.selectedPage : ''}
                                onClick={() => {
                                    onPageChanged(p)
                                }}>{p}</button>
        )}
    </div>
}