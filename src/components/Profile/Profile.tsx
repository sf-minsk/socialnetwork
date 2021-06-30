import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {UsersProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: UsersProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}



