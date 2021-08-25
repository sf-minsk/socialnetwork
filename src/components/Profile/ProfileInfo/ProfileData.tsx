import {Contact} from "./Contact";
import React from "react";
import {UsersProfileType} from "../../../redux/profile-reducer";

type ProfileDataType = {
    profile: UsersProfileType
    isOwner: boolean
    onEditMode: () => void
}
export const ProfileData = ({profile, isOwner, onEditMode}: ProfileDataType) => {
    return <div>
        <div>
            <b>Full Name:</b>{' ' + profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
        <div><b>My professional skills:</b>{' ' + profile.lookingForAJobDescription}</div>}
        <div>
            <b>About me:</b> {' ' + (profile.aboutMe !== null ? profile.aboutMe : '---')}
        </div>
        <div><b>Contacts:</b>
            {
                Object.keys(profile.contacts).map((key) => {
                    // @ts-ignore
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })
            }
        </div>
        {
            isOwner && <div>
                <button onClick={onEditMode}>edit profile</button>
            </div>
        }
    </div>
}