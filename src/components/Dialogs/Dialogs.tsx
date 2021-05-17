import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";


type PropsType = {
    dispatch: (action: ActionsTypes) => void
    state: DialogsPageType
}

export const Dialogs = (props: PropsType) => {
debugger
    const dialogsElements  = props.state.dialogs.map((d: any) =>
        <DialogItem
            key={d.id}
            id={d.id}
            name={d.name}
        />)
    const messagesElements = props.state.messages.map((m: any) =>
        <Message
            key={m.id}
            message={m.message}
        />)
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(text))
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
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
                            value={props.state.newMessageText}
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

