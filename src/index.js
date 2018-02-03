import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import LoginForm from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginForm />, document.getElementById('loginForm'));
registerServiceWorker();
