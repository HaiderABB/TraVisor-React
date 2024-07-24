// src/api/AuthClient.js
import axios from 'axios';

// Create an Axios instance
const AuthClient = axios.create({
  baseURL: 'http://localhost:5050/UserAuth',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // Request Timeout
});

AuthClient.interceptors.request.use(
  config => {
    console.log('API Request Sent')
    return config;
  },
  error => {
    // Handle request error
    console.log('API Request Failed')
    return Promise.reject(error);
  }
);

AuthClient.interceptors.response.use(
  response => {
    console.log('API Response Recieved')
    return response;
  },
  error => {
    // Handle response error
    console.log('API Response Failed')
    return Promise.reject(error);
  }
);

export default AuthClient;
