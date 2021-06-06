import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/userWhithoutAvatar.png'
import {v1} from "uuid";
import {UsersType} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => <button key={v1()} className={props.currentPage === p ? styles.selectedPage : ''}
                                    onClick={(e) => {
                                        props.onPageChanged(p)
                                    }}>{p}</button>
            )}
        </div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>
                            UNFOLLOW
                        </button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>
                            FOLLOW
                        </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
        Users will be here
    </div>
}

