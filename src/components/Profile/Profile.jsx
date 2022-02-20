import p from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props){

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;