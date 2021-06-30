import React from "react";
import {Field, reduxForm} from "redux-form";

type LoginPropsType = {}
type LoginFormPropsType = {
    handleSubmit: any
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </>
}


export const LoginForm = (props: LoginFormPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'login'} name={'login'}/>
            </div>
            <div>
                <Field component={'input'} placeholder={'password'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)