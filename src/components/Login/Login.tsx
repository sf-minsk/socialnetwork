import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import style from '../Common/FormsControls/FormsControls.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'login', 'login', [required])}
            {createField(Input, 'password', 'password', [required])}
            {createField(Input, 'checkbox', 'rememberMe', [], {type: 'checkbox'}, 'remember me')}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </>
}

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)