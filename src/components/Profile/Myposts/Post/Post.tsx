import React from 'react';
import cls from './Post.module.css'

type PostType = {
    likeCounts: number
    message: string
}

export const Post= (props: PostType) => {
    return (
        <div className={cls.item}>
            {props.message}
            <div>Like ({props.likeCounts})</div>
        </div>
    )
}
