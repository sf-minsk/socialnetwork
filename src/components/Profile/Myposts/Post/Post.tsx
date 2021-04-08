import React from 'react';
import s from './Post.module.css'

type PostType = {
    likeCounts: number
    message: string
}

export const Post= (props: PostType) => {
    return (
        <div className={s.item}>
            {props.message}
            <div>Like ({props.likeCounts})</div>
        </div>
    )
}
