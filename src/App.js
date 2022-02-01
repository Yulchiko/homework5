import {Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout";
import CarsPage from "./pages/CarPages";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

import './App.css';


export default function App (){
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="cars" element={<CarsPage/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="posts" element={<Posts/>}/>
                <Route path="comments" element={<Comments/>}/>
            </Route>
        </Routes>
        </>
    );
};

