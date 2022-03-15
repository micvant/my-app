

let ProfileStatus = (props) =>{
 return (
    <>
        {props.status !== null ? <div><span>{props.status}</span></div> : <div><input value={props.status}/></div>
        }
    </>
 )
}

export default ProfileStatus;