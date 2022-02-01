import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import CommentsComponent from "../Component/Components/CommentsComponent";
import {getAllComments} from "../Store/CommentsSlice";
import {Service} from "../Service/Service";

import "./Comments.css"

export default function Comments() {
    const {status, error} = useSelector(state => state.comments);
    const dispatch = useDispatch();
const [comments, setComments] = useState([])

    useEffect(() =>{
        Service.getAllComments()
            .then(value => setComments(value))
    },[])

    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch]);

    return (
        <div className="comments">
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {comments.map((comment) => <CommentsComponent {...comment} key={comment.id} comment={comment}/>)}
        </div>
    );
};