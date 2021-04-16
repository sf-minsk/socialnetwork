import React from "react";
// import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../index";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: PropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messages}> {messagesElements} </div>
        </div>
    )
}

