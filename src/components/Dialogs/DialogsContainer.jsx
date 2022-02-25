import React from 'react'
import {sendMessageCreator, updatePostTextCreator} from "../../Data/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText : state.dialogsPage.newMessageText,
        dialogsPage : state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText : (text) => {
            let action = updatePostTextCreator(text);
            dispatch(action);
        },
        sendMessage : () =>{
            let action = sendMessageCreator();
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;