import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, UsersProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: UsersProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UsersProfileType) => void
}
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }


        profileAPI.getProfile(userId)
            .then(data => {
                    this.props.setUserProfile(data)
                }
            );
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)



