import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx"

// Also create a liked.jsx component which sets the current book as liked or unliked depending on the previous state
// ( i.e. like if the book was unlike previously and vice versa). Load this component in App.js.

ReactDOM.render( < App / > , document.getElementById('root'));