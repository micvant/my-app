import p from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

function MyPosts(props) {

    let arrayPosts = props.posts.map(post => <Post key={post.id} messages={post.value} img={post.img}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={p.myposts}>
            My posts
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {arrayPosts}
            </div>
        </div>
    );
}

export default MyPosts;