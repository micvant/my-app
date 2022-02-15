import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Content from "./components/Profile/Profile";

function App() {
  return (
     < div className='test'>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content/>
        </div>
     </div>
    
  );
}

export default App;