import {useState} from "react";


let ProfileStatus = (props) =>{
    const [editMode, setEditMode] = useState(false);
 return (
    <>
        {editMode === false ? <div><span onClick={()=> setEditMode(true)}>{props.status}</span></div> : <div><input value={props.status}/></div>
        }
    </>
 )
}

export default ProfileStatus;