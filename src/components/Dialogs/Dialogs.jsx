import React from 'react'
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageCreator, updatePostTextCreator} from "../../Data/State";

function Dialogs(props){

    let updateTextPost = (e) => {
        let action = updatePostTextCreator(e.target.value);
        props.dispatch(action);
    }

    let sendMessage = () =>{
        let action = sendMessageCreator();
        props.dispatch(action);
    };

    // Преобразуем массивы с данными в верстку
    let arrayDialogs = props.state.DialogsData.map( el => <Dialog key={el.id} name={el.name} id={el.id}/>);
    let arrayMessages = props.state.MessagesData.map( el => <Message key={el.id} value={el.value}/> );

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {arrayDialogs}
            </div>
            <div className={d.messages}>
                <div>{arrayMessages}</div>
                <div>
                    <div><textarea onChange={updateTextPost} value={props.state.newMessageText} name="" id="" cols="30" rows="10"/></div>
                    <div><button onClick={sendMessage}>SEND</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;