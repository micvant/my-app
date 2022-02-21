
import reportWebVitals from './reportWebVitals';
import store from './Data/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderThree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderThree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderThree(state);
});


reportWebVitals();
