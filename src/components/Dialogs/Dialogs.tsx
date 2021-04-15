import React from "react";
// import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Jane'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Liza'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Sam'}]
    const messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your learning?'},
        {id: 3, message: 'Is good.'}]
    const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messages}> {messagesElements} </div>
        </div>
    )
}

