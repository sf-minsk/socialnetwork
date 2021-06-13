import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import {authAPI} from "../../api/api";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        authAPI.getAuthHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


