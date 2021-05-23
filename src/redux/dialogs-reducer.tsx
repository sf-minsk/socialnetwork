import {v1} from "uuid";
import {ActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

export type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}


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

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        }
        case SEND_MESSAGE: {
            const newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
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