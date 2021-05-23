import React from "react";
import styles from './users.module.css'
import {v1} from "uuid";

export const Users = (props: any) => {
if (props.users.length === 0) {
    props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://iconarchive.com/download/i96376/iconsmind/outline/Internet.ico',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'https://iconarchive.com/download/i96376/iconsmind/outline/Internet.ico',
                followed: false,
                fullName: 'Alex',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'https://iconarchive.com/download/i96376/iconsmind/outline/Internet.ico',
                followed: true,
                fullName: 'Andrey',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'https://iconarchive.com/download/i96376/iconsmind/outline/Internet.ico',
                followed: true,
                fullName: 'Olga',
                status: 'I am a boss too',
                location: {city: 'Brest', country: 'Belarus'}
            },
        ]
    )
}
    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        Users will be here
    </div>
}