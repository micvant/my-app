import React from 'react';
import './App.css';
import Nav from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MainContent from "./components/MainContent/MainContent";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderConteiner from "./components/Header/HeaderConteiner";

function App(props) {
  return (
      <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderConteiner/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes >
                        <Route path="/dialogs/*"
                               element= {<DialogsContainer />}/>
                        <Route path="/main_content/*"
                               element={<MainContent />}/>
                        <Route path="/profile/*"
                               element={<ProfileContainer store={props.store} />}/>
                       <Route path='/users/*'
                           element={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;