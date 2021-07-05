import {v1} from "uuid";
import {ActionsTypes} from "./store";

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
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage: MessagesType = {
                id: v1(),
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state
    }
}


export const sendMessageAC = (newMessageBody: string): ActionsTypes => {
    return {
        type: SEND_MESSAGE,
        newMessageBody,
    }
}

export default dialogsReducer