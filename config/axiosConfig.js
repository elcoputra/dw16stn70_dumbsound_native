import axios from 'axios';

// Set config defaults when creating the instance
export const API = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'http://192.168.100.188:5000/api/v1',
});

// Alter defaults after instance has been created
export const setAuthToken = token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
