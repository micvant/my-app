import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Content from "./components/Profile";

function Wrapper(){
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content/>
        </div>
    );
}

export default Wrapper;