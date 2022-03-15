import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to="/profile">profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default Nav;