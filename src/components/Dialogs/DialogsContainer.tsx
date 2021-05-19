import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const onNewMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                return <Dialogs
                    dialogsPage={store.getState().dialogsPage}
                    updateNewMessageTextAC={onNewMessageChange}
                    sendMessageAC={onSendMessageClick}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

