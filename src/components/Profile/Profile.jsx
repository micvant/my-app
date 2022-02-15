import p from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

function Profile(){
    return (
        <div className={p.content}>
            <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg' alt='img'></img>
            <MyPosts/>
        </div>
    );
}

export default Profile;