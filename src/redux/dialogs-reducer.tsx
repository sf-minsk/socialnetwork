import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessagesType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogs: [
        {id: v1(), name: 'Jane'},
        {id: v1(), name: 'Maxim'},
        {id: v1(), name: 'Liza'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Sam'}
    ],
    messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'How is your learning?'},
        {id: v1(), message: 'Is good.'}
    ],
    newMessageText: '',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
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

export const updateNewMessageTextAC = (text: string): ActionsTypes => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}
export const sendMessageAC = (): ActionsTypes => {
    return {
        type: SEND_MESSAGE,
    }
}

export default dialogsReducer