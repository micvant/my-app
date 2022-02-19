import React from "react";
import d from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={d.messsage}>
            {props.value}
        </div>
    );
}

export default Message;