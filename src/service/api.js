import axios from 'axios';

const api = axios.create({
    // baseURL:'https://microprojeto3-backend.herokuapp.com/'
    baseURL:'http://localhost:3336/'
});

export default api;