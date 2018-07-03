import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/common.css";
import App from './App';
import registerServiceWorker from './assets/js/registerServiceWorker';

import {Provider} from "react-redux";
import store from "./store/index.js";

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
