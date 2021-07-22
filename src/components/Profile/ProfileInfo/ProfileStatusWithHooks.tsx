import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

// extends React.Component<PropsType>

export const ProfileStatusWithHooks = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
       setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div className={s.content}>
                    <span onDoubleClick={activateEditMode}>{props.status || 'STATUS'}</span>
                </div>
            }
            {editMode &&
            <div className={s.content}>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus
                       value={status}/>
            </div>
            }
        </>
    )
}



