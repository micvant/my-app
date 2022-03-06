import React from "react";
import preloder from "../../img/Spinner-5.gif";

let Preloader = (props) => {
    return <div>
        {props.isFetching && <img src={preloder}/>}
    </div>
}

export default Preloader;