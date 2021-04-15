import React from 'react';
import s from './Post.module.css'

type PostType = {
    id: number
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            {props.message}
            <div>Like ({props.likeCount})</div>
        </div>
    )
}
