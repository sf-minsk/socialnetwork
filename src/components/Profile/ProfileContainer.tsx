import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, UsersProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: UsersProfileType | null
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }

        this.props.getUserProfile(userId)
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

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)



