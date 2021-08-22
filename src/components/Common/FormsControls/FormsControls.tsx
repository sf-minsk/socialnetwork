import React from "react";
import styles from './FormsControls.module.css'
import {Field} from "redux-form";


const FormControl = ({input, meta, child, ...props}: any) => {
    const error = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (error && styles.error)}>
            <div>
                {props.children}
            </div>
            {error && <span>{meta.error}</span>}

        </div>
    )
}
export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const createField = (component: any, placeholder: any, name: any, validate: any = [], props: any = {}, text = '') => {
    return <div><Field
        component={component}
        placeholder={placeholder}
        name={name}
        validate={validate}
        {...props}
    />{text}</div>


}













