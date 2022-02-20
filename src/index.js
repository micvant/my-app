
import reportWebVitals from './reportWebVitals';
import {state, addPost, updateNewPostText, subscribe} from './Data/State.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(rerenderThree);

reportWebVitals();
