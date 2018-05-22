import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import  '../css/style.css'
import App from '../component/app';
import {history} from "./history"

//import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));
//registerServiceWorker();