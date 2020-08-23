import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.request.use(requestConfig => {
    // Edit request config
    return requestConfig;
}, error => {
    console.error('Something is broken', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(responseConfig => {
    // Edit response config
    return responseConfig;
}, error => {
    console.error('Something is broken', error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
