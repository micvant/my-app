import React from 'react'
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";

const Message = (props) => {
    return (
        <div className={d.messsage}>
            {props.value}
        </div>
    );
}

function Dialogs(props){
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <Dialog name="Anton" id="1"/>
                <Dialog name="Test" id="2"/>
                <Dialog name="Tonia" id="3"/>
                <Dialog name="Dima" id="4"/>
            </div>
            <div className={d.messages}>
                <Message value="Hi!"/>
                <Message value="Hi-ji!"/>
                <Message value="Lold!"/>
            </div>
        </div>
    );
}

export default Dialogs;