import p from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props){
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts PostData={props.PostData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;