import p from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import bgr from '../../../img/background.jpg';
import ProfileStatus from "../Status/ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={p.content}>
                <img className={p.background}
                     src={bgr}
                     alt='img-bgr'></img>
            </div>
            <div className={p.text}>
                <img className={p.avatar}
                     src={props.profile.photos.small}
                     alt='img-photos'></img>
                <ProfileStatus setStatusThunk={props.setStatusThunk}
                status={props.status}/>
            </div>
        </div>
    );
}

export default ProfileInfo;