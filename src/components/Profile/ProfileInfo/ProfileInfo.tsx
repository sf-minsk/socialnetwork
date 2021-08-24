import React, {ChangeEvent} from 'react';
import logo from './contentLogo.png'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import {UsersProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userWhithoutAvatar.png";

type PropsType = {
    isOwner: boolean
    profile: UsersProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
}


export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const photo = e.target.files[0]
            props.savePhoto(photo)
        }

    }
    return (
        <div className={s.content}>
            <div>
                <img src={logo} alt={'logo'}/>
            </div>

            <div><b>{props.profile.fullName}</b></div>
            <div style={{display: 'inline-flex'}}>

            <b>Status: </b><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt={'userPhoto'}/>
            </div>
            {props.isOwner && <input name={'change photo'} type={"file"} onChange={onMainPhotoSelected}/>}
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob && <div><b>My professional skills</b> : {props.profile.lookingForAJobDescription}</div>}
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>



        </div>
    )
}

