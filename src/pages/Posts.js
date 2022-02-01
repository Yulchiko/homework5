import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Service} from "../Service/Service";
import PostsComponent from "../Component/Components/PostsComponents";
import {getAllPosts} from "../Store/PostsSlice";

import "./Posts.css"

export default function Posts() {
    const {status, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        Service.getAllPosts()
            .then(value => setPosts(value))
    },[])
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div className="Posts">
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts.map((post) => <PostsComponent {...post} key={post.id} post={post}/>)}
        </div>
    );
};


