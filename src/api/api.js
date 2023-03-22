import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/comics?apikey=75d2ced2b934937b2e5d3fa987983231',
    timeout: 5000,
  });

export default instance;