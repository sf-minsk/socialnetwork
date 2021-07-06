import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    placeholder={'login'}
                    name={'login'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder={'password'}
                    name={'password'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    type={'checkbox'}
                    name={'rememberMe'}
                />remember me
            </div>
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