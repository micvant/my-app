import React from 'react'
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props){
    // Преобразуем массивы с данными в верстку
    let arrayDialogs = props.state.DialogsData.map( el => <Dialog key={el.id} name={el.name} id={el.id}/>);
    let arrayMessages = props.state.MessagesData.map( el => <Message key={el.id} value={el.value}/> );

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {arrayDialogs}
            </div>
            <div className={d.messages}>
                {arrayMessages}
            </div>
        </div>
    );
}

export default Dialogs;