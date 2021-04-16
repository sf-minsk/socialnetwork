import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            {props.message}
            <div>Like ({props.likeCount})</div>
        </div>
    )
}
