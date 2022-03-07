import p from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";

function ProfileInfo(props){
    if(!props.profile){
        return <Preloader/>
    }
    return (
    <div>
        <div className={p.content}>
            <img src={props.profile.photos.small} alt='img'></img>
        </div>
        <div className={p.text}>
            ava + deskription
        </div>
    </div>
    );
}

export default ProfileInfo;