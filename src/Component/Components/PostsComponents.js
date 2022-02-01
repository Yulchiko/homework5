import "./PostsComp.css"

export default function PostsComponent({post}) {
     return (
        <div className="Post_id">
            <h2>Posts</h2>
            <div>id:{post.id}</div>
            <div>userId:{post.userId}</div>
            <div>body:{post.body}</div>
            <div>title:{post.title}</div>
        </div>
    )
}