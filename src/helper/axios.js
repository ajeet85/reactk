import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://65.0.166.200:3009/',
});


const Axios2 = axios.create({
  baseURL: 'http://65.0.166.200:3009/',
});

// Axios.defaults.headers.Accept = 'application/vnd.app.v5+json';
// fetchAxios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
export default Axios;
