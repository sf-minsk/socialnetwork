import React from 'react';
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
}


export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        console.log('this:', this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                <div className={s.content}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div className={s.content}>
                    <input onBlur={this.deactivateEditMode} autoFocus value={this.props.status}/>
                </div>
                }
            </>
        )
    }

}

