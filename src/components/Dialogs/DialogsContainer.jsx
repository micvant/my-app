import React from 'react'
import {sendMessageCreator, updatePostTextCreator} from "../../Data/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props){

    let state = props.store.getState();

    let onUpdatePostText = (text) => {
        let action = updatePostTextCreator(text);
        props.store.dispatch(action);
    }

    let onSendMessage = () =>{
        let action = sendMessageCreator();
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            sendMessage={onSendMessage}
            updatePostText={onUpdatePostText}
            newMessageText={state.dialogsPage.newMessageText}
            dialogsPage={state.dialogsPage}
        />
    );
}

export default DialogsContainer;