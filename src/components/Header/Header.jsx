import h from './Header.module.css'
import {NavLink} from "react-router-dom";
import hedear_img from '../../img/header_img.jpg';

function Header(props){
    return (
    <header className={h.header}>
        <img src={hedear_img} alt="img"></img>
        <div className={h.loginBlock}>
            { props.isAuth ? <span>{props.login}</span> : <NavLink to='/login'>login</NavLink> }
        </div>
    </header>
    );
}

export default Header;