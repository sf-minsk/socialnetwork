import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, UsersProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: UsersProfileType | null
    status: string
    authorizedUserId: number | null
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = JSON.stringify(this.props.authorizedUserId);
            // if (!userId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,

    }
}


export default compose<React.ComponentType>(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
)(ProfileContainer)



