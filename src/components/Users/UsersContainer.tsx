import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleTheFollowingProgress,
    unFollow,
    UsersType,
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

type mapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressArray: Array<number>
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleTheFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgressArray={this.props.followingInProgressArray}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressArray: state.usersPage.followingInProgressArray
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleTheFollowingProgress,
    getUsers,
})(UsersContainer)