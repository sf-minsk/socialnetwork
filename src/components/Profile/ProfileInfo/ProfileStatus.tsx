import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div className={s.content}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'STATUS'}</span>
                </div>
                }
                {this.state.editMode &&
                <div className={s.content}>
                    <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus
                           value={this.state.status}/>
                </div>
                }
            </>
        )
    }

}

