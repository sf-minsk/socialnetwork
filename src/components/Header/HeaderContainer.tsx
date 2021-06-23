import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {


        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)


