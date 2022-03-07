import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props){

    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;