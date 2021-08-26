import React, {ChangeEvent, useState} from 'react';
import logo from './contentLogo.png'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import {UsersProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userWhithoutAvatar.png";
import {ProfileData} from "./ProfileData";
import {ProfileDataFormRedux} from './ProfileDataForm';

type PropsType = {
    isOwner: boolean
    profile: UsersProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (formData: any) => Promise<any>
}

export const ProfileInfo = (props: PropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const onEditMode = (value: boolean) => {
        setEditMode(value)
    }
    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }
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
            <div><img src={logo} alt={'logo'}/></div>
            <div style={{display: 'inline-flex'}}>
                <b>Status: </b><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt={'userPhoto'}/>
            </div>
            {props.isOwner &&
            <input name={'change photo'} type={"file"} onChange={onMainPhotoSelected}/>
            }
            {
                editMode ?
                    <ProfileDataFormRedux
                        onSubmit={onSubmit}
                        initialValues={props.profile}
                        profile={props.profile}
                    />
                    :
                    <ProfileData
                        onEditMode={() => onEditMode(true)}
                        profile={props.profile}
                        isOwner={props.isOwner}
                    />
            }
        </div>
    )
}

