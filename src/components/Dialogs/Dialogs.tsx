import React from "react";
// import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: PropsType) => {

    const dialogsElements = props.dialogs.map((d: any) => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map((m: any) => <Message message={m.message}/>)
    const messageTextElement = React.createRef<HTMLTextAreaElement>()

    const onClick = () => {
        const messageText = messageTextElement.current?.value
        alert(messageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div>
                <textarea ref={messageTextElement}/>
                <button onClick={onClick}>send</button>
                <div className={s.messages}> {messagesElements} </div>
            </div>
        </div>
    )
}

