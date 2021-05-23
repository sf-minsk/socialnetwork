import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogsPage: InitialStateType
    updateNewMessageTextAC: (text: string) => void
    sendMessageAC: () => void
}

export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d: any) =>
        <DialogItem
            key={d.id}
            id={d.id}
            name={d.name}
        />)
    const messagesElements = props.dialogsPage.messages.map((m: any) =>
        <Message
            key={m.id}
            message={m.message}
        />)
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewMessageTextAC(text)
    }
    const onSendMessageClick = () => {
        props.sendMessageAC()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea
                            value={props.dialogsPage.newMessageText}
                            onChange={onNewMessageChange}
                            placeholder={'Enter you message'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

