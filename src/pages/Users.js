import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Service} from "../Service/Service";
import UserComponent from "../../src/Component/Components/UserComponent";


import "./Users.css"
import {getAllPosts} from "../Store/PostsSlice";

export default function Users() {
    const {status, error} = useSelector(state => state.users);
    const dispatch = useDispatch();
 const [users, setUsers] = useState([])

useEffect(()=>{
    Service.getAllUsers()
.then(value => setUsers(value));
},[])

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div className="users">
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {users.map((user) => <UserComponent {...user} key={user.id} user={user}/>)}
        </div>
    );
};
