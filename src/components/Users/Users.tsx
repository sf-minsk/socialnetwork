import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/userWhithoutAvatar.png'
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../Common/Paginator/Paginator";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    followingInProgressArray: Array<number>
}

export const Users = ({
                          totalUsersCount,
                          users,
                          currentPage,
                          pageSize,
                          onPageChanged,
                          followingInProgressArray,
                          follow,
                          unFollow
                      }: PropsType) => {

    return <div>
        <Paginator
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}/>
        {users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto} alt={'img'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgressArray.some(id => id === u.id)} onClick={() => {
                                unFollow(u.id)
                            }}>
                                UNFOLLOW
                            </button>
                            : <button disabled={followingInProgressArray.some(id => id === u.id)} onClick={() => {
                                follow(u.id)
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
        </div>)}
    </div>
}

