import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import style from '../Common/FormsControls/FormsControls.module.css'


// type LoginPropsType = {
//     login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
//     isAuth: boolean
//     captchaUrl: string | null
// }
type LoginFormDataType = {
    captchaUrl: string | null

}

const LoginForm: React.FC<LoginFormDataType & InjectedFormProps<{}, LoginFormDataType>> = ({
                                                                                               handleSubmit,
                                                                                               error,
                                                                                               captchaUrl
                                                                                           }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'login', 'login', [required])}
            {createField(Input, 'password', 'password', [required])}
            {createField(Input, 'checkbox', 'rememberMe', [], {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField(Input, 'Symbols from image', 'captcha', [required])}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}
const LoginFormRedux = reduxForm<{}, LoginFormDataType>({form: 'login'})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null

}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login)