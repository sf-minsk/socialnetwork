import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/userWhithoutAvatar.png'
import {v1} from "uuid";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                    onClick={() => {
                                        props.onPageChanged(p)
                                    }}>{p}</button>
            )}
        </div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto} alt={'img'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'abc967f4-abc5-47ce-a245-10e7f69e7e3a'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>
                                UNFOLLOW
                            </button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'abc967f4-abc5-47ce-a245-10e7f69e7e3a'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
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

