import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MainContent from "./components/MainContent/MainContent";

function App(props) {

  return (
      <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes >
                        <Route path="/dialogs/*"
                               element= {<DialogsContainer />}/>
                        <Route path="/main_content/*"
                               element={<MainContent />}/>
                        <Route path="/profile/*"
                               element={<Profile store={props.store} />}/>
                    </Routes>
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;