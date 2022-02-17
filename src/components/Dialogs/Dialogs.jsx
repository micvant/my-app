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

let DialogsData = [
    {id: 1, name:"Anton" },
    {id: 2, name:"Test" },
    {id: 3, name:"Tonia" },
    {id: 4, name:"Dima" },
    {id: 5, name:"Gena" }
];

let MessagesData = [
    {id: 1, value:"Hi!" },
    {id: 2, value:"Test" },
    {id: 3, value:"Tonia" },
    {id: 4, value:"Dima" },
    {id: 5, value:"Gena" }
];

// Преобразуем массивы с данными в верстку
let arrayDialogs = DialogsData.map( el => <Dialog name={el.name} id={el.id}/>);
let arrayMessages = MessagesData.map( el => <Message value={el.value}/> );

function Dialogs(props){
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