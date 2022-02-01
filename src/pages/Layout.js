import {NavLink, Outlet} from "react-router-dom";

import "./Layout.css"

export default function Layout() {
    return (
        <div className="Layout">
            <div className="Menu">
                <nav className="Ul">
                    <NavLink to="users">Users</NavLink>&nbsp;
                    <NavLink to="cars">Cars</NavLink>&nbsp;
                    <NavLink to="posts">Posts</NavLink>&nbsp;
                    <NavLink to="comments">Comments</NavLink>
                </nav>
                <Outlet/>
            </div>
        </div>

    )
}

