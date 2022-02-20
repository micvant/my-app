//import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes >
                        <Route path="/dialogs/*"
                               element= {<Dialogs state={props.state.dialogsPage} />}/>
                        <Route path="/profile/*"
                               element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;