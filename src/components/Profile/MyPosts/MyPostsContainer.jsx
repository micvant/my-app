import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../Data/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText : (text) =>{
            let action = updateNewPostText(text);
            dispatch(action);
        },
        addPost : () =>{
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

// Обертка для компоненты MyPost, дает нужные посты
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;