import React from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {

    const onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    return (
        <Dialogs
            dialogsPage={props.store.getState().dialogsPage}
            updateNewMessageTextAC={onNewMessageChange}
            sendMessageAC={onSendMessageClick}
        />
    )
}

