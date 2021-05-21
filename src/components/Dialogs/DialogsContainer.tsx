import React from "react";
import {InitialStateType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchProps = {
    updateNewMessageTextAC: (text: string) => void
    sendMessageAC: () => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
const mapDispatchToProps = (dispatch: any): MapDispatchProps => {
    return {
        updateNewMessageTextAC: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessageAC: () => {
            dispatch(sendMessageAC())
        },
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


