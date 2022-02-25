
import reportWebVitals from './reportWebVitals';
import store from './Data/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderThree = (store) => {

    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderThree(store);
store.subscribe(() => {
    rerenderThree(store);
});


reportWebVitals();
