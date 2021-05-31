import React from "react";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userWhithoutAvatar.png'


export class Users extends React.Component<any, any> {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }


    render() {
        return <div>
            <button onClick={this.getUsers}>getUsers</button>
            {
                this.props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>
                            UNFOLLOW
                        </button> : <button onClick={() => {
                            this.props.follow(u.id)
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
}