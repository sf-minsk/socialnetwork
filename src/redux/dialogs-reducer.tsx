import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessagesType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        case SEND_MESSAGE:
            if (state.newMessageText) {
                const newMessage: MessagesType = {
                    id: v1(),
                    message: state.newMessageText,
                }
                state.messages.push(newMessage)
                state.newMessageText = ('')
            }
            return state
        default:
            return state
    }
}

export default dialogsReducer