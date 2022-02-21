import p from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import {addPostActionCreator, updateTextPostActionCreator} from "../../../Data/State";

function MyPosts(props){

    let arrayPosts = props.state.PostData.map(post => <Post key={post.id} messages={post.value} img={post.img}/>);

    let addPost = () =>{
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let updatePostText = (e) =>{

        let text = e.target.value;
        let action = updateTextPostActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={p.myposts}>
            My posts
            <div>
                <div>
                    <textarea value={props.state.newPostText} onChange={updatePostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {arrayPosts}
            </div>
        </div>
    );
}

export default MyPosts;