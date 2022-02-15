import n from './Navbar.module.css'

function Nav(){
    return(
        <nav className={n.nav}>
            <div className={n.item}>profile</div>
            <div className={n.item}>Main content</div>
            <div className={n.item}>Messages</div>
        </nav>
    );
}

export default Nav;