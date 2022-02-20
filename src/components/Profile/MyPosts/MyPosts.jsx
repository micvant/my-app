import p from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

function MyPosts(props){

    let ref = React.createRef();
    let arrayPosts = props.state.PostData.map(post => <Post key={post.id} messages={post.value} img={post.img}/>);

    let addPost = () =>{
        props.dispatch({type : 'ADD-POST'});
    }

    let updatePostText = () =>{

        let text = ref.current.value;
        props.dispatch({type : 'UPDATE-TEXT-POST', newText : text});
    }

    return (
        <div className={p.myposts}>
            My posts
            <div>
                <div>
                    <textarea ref={ref} value={props.state.newPostText} onChange={updatePostText}/>
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