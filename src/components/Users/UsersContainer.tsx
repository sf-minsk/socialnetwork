import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)