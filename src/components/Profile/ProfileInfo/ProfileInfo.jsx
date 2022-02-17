import p from './ProfileInfo.module.css'

function ProfileInfo(){
    return (
    <div>
        <div className={p.content}>
            <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg' alt='img'></img>
        </div>
        <div className={p.text}>
            ava + deskription
        </div>
    </div>
    );
}

export default ProfileInfo;