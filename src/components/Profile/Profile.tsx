import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {UsersProfileType} from "../../redux/profile-reducer";

type PropsType = {
    isOwner: boolean
    profile: UsersProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (formData: any) => Promise<any>
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
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}



