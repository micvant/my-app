import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../Data/profile-reducer";
import MyPosts from "./MyPosts";

// Обертка для компоненты MyPost, дает нужные посты
function MyPostsContainer(props){
    debugger;
    let state = props.store.getState();

    let onAddPost = () =>{
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onPostChange = (text) =>{
        let action = updateNewPostText(text);
        props.store.dispatch(action);
    }

    return (
       <MyPosts
           updateNewPostText={onPostChange}
           addPost={onAddPost}
           posts={state.profilePage.posts}
           newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;