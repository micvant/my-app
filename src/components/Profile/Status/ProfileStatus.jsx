import {useState} from "react";

let ProfileStatus = (props) =>{

    const [editMode, setEditMode] = useState(false);
    const [status, upgradeStatus] = useState("");
    let updateStatus = (e) =>{
        upgradeStatus(e.currentTarget.value);

    }
    let deactivateEditeMode = () => {
        setEditMode(false);
        props.setStatusThunk(status);
    }
 return (
    <>
        {editMode === false ? <div><span onClick={()=> setEditMode(true)}>{props.status || "test"}</span></div> :
            <div><input onBlur={deactivateEditeMode} onChange={ updateStatus } value={status}/></div>
        }
    </>
 )
}

export default ProfileStatus;