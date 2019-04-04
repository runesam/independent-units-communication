import http from 'axios';

const instance = http.create({
    baseURL: process.env.API_URL || '/',
});

export default instance;
