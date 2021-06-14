import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/userWhithoutAvatar.png'
import {v1} from "uuid";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followUnfollowAPI} from "../../api/api";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    toggleTheFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgressArray: Array<string>
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
                            ? <button disabled={props.followingInProgressArray.some(id => id === u.id)} onClick={() => {
                                props.toggleTheFollowingProgress(true, u.id)
                                followUnfollowAPI.setUnfollowUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleTheFollowingProgress(false, u.id)
                                    });
                            }}>
                                UNFOLLOW
                            </button>
                            : <button disabled={props.followingInProgressArray.some(id => id === u.id)} onClick={() => {
                                props.toggleTheFollowingProgress(true, u.id)
                                followUnfollowAPI.setFollowUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleTheFollowingProgress(false, u.id)
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

