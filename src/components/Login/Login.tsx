import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </>
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
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