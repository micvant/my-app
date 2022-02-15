import p from './Post.module.css'

function Post(props){
    return (
        <div className={p.post}>
            <img src={props.img} alt="avatar" />
            {props.messages}
        </div>
    );
}

export default Post;