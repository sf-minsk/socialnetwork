import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newMessageBody'
                    placeholder='Enter Your Message'/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem
            key={d.id}
            id={d.id}
            name={d.name}
        />)
    const messagesElements = props.dialogsPage.messages.map(m =>
        <Message
            key={m.id}
            message={m.message}
        />)

    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

