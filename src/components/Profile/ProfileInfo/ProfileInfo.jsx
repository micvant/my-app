import p from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";

function ProfileInfo(props){
    if(!props.profile){
        return <Preloader/>
    }
    return (
    <div>
        <div className={p.content}>
            <img className={p.background} src="https://thumbs.dreamstime.com/b/%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D0%B9%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D1%81%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BB%D0%B5%D1%81%D0%B0-%D0%B3%D0%BE%D1%80%D1%8B-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B5%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5-%D0%BF%D1%83%D1%80%D0%BF%D1%83%D1%80%D0%BD%D1%8B%D0%B5-%D1%82%D0%BE%D0%BD%D1%8B-149822274.jpg" alt='img'></img>
        </div>
        <div className={p.text}>
            <img className={p.avatar} src={props.profile.photos.small}></img>
            <span>Описание</span>
        </div>
    </div>
    );
}

export default ProfileInfo;