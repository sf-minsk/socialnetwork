import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {UsersProfileType} from "../../redux/profile-reducer";

type PropsType = {
    isOwner: boolean
    profile: UsersProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}



