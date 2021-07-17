import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

// extends React.Component<PropsType>

export const ProfileStatusWithHooks = (props: PropsType) => {

        return (
            <>
                {
                <div className={s.content}>
                    <span onDoubleClick={this.activateEditMode}>{props.status || 'STATUS'}</span>
                </div>
                }
                {false &&
                <div className={s.content}>
                    <input onChange={this.onStatusChange} onBlur={} autoFocus
                           value={''}/>
                </div>
                }
            </>
        )
    }



