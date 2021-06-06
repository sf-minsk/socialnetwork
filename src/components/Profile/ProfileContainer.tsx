import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UsersProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";


type mapStateToPropsType = {
    profile: UsersProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: UsersProfileType) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)



