import {InitialStateType, sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
