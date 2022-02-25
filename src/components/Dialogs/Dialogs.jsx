import React from 'react'
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props){

    let dialogsPage = props.dialogsPage;

    let onUpdateTextPost = (e) => {
        let text = e.target.value;
        props.updatePostText(text);
    }

    let onSendMessage = () =>{
        props.sendMessage();
    };

    // Преобразуем массивы с данными в верстку
    let arrayDialogs = dialogsPage.dialogs.map( el => <Dialog key={el.id} name={el.name} id={el.id}/>);
    let arrayMessages = dialogsPage.messages.map( el => <Message key={el.id} value={el.value}/> );

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {arrayDialogs}
            </div>
            <div className={d.messages}>
                <div>{arrayMessages}</div>
                <div>
                    <div><textarea onChange={onUpdateTextPost} value={props.newMessageText} name="" id="" cols="30" rows="10"/></div>
                    <div><button onClick={onSendMessage}>SEND</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;