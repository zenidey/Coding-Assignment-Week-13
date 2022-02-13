import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import Navigation from './components/navigation';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(  // what we want to render 
    <Navigation />, 
  document.getElementById('root') // where we want to render it
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
