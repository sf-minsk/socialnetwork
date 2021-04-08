import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Jane'/>
                <DialogItem id='2' name='Maxim'/>
                <DialogItem id='3' name='Liza'/>
                <DialogItem id='4' name='Alex'/>
                <DialogItem id='5' name='Sam'/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How is your learning?'}/>
                <Message message={'Is good.'}/>
            </div>
        </div>
    )
}

