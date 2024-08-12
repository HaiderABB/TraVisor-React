// src/api/ServerInstance.js
import axios from 'axios';

// Create an Axios instance
const ServerInstance = axios.create({
  baseURL: 'http://localhost:5000/UserAuth',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // Request Timeout
});

ServerInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Handle request error
    console.log('API Request Failed')
    return Promise.reject(error);
  }
);

ServerInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle response error
    console.log('API Response Failed')
    return Promise.reject(error);
  }
);

export default ServerInstance;
