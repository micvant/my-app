import p from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

function MyPosts(props){

    let ref = React.createRef();
    let arrayPosts = props.PostData.map(post => <Post messages={post.value} img={post.img}/>);

    let addPost = () =>{
        let text = ref.current.value;
        props.addPost(text);
    }
    return (
        <div className={p.myposts}>
            My posts
            <div>
                <div>
                    <textarea ref={ref}></textarea>
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