import "./CommentsComponent.css"

export default function CommentsComponent({comment}) {
    return (
        <div className="comments_id">
            <h2>Comment</h2>
            <div>postId:{comment.postId}</div>
            <div>id:{comment.id}</div>
            <div>name:{comment.name}</div>
            <div>email:{comment.email}</div>
            <div>body:{comment.body}</div>
        </div>
    );
}