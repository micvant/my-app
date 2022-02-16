import React from 'react'
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs(props){
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog + ' ' + d.active}>
                    <NavLink to="/dialogs/1">Anton</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/2">Test</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/3">Tonia</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/4">Dima</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.messsage}>
                    Hi!
                </div>
                <div className={d.messsage}>
                    Hi-ji!
                </div>
                <div className={d.messsage}>
                    Lol!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;