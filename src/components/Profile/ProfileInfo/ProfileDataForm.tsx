import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import {createField, Input, TextArea} from "../../Common/FormsControls/FormsControls";
import {UsersProfileType} from "../../../redux/profile-reducer";

export type ProfileDataFormType = {
    profile: UsersProfileType
}
const ProfileDataForm: React.FC<ProfileDataFormType & InjectedFormProps<{}, ProfileDataFormType>> = (props) => {
    const {
        error,
        handleSubmit,
        profile
    } = props
    return <form onSubmit={handleSubmit}>
        {error && <div className={s.formError}>{error}</div>}
        <div>
            <b>Full Name:</b>{createField(Input, 'Full Name', 'fullName', [])}
        </div>
        <div>
            <b>Looking for a job:</b>{createField(Input, '', 'lookingForAJob', [], {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b>{createField(TextArea, 'My skills', 'lookingForAJobDescription', [])}
        </div>
        <div>
            <b>About me:</b> {createField(TextArea, 'About me', 'aboutMe', [])}
        </div>
        <div><b>Contacts:</b>
            {
                Object.keys(profile.contacts).map((key) => {
                    return <div key={key} className={s.contacts}>
                        <b>{key}:</b>{createField(Input, key, 'contacts.' + key, [])}
                    </div>
                })
            }
        </div>
        <button>save</button>
    </form>
}


export const ProfileDataFormRedux = reduxForm<{}, ProfileDataFormType>({form: 'editProfile'})(ProfileDataForm)