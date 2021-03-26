import axios from 'axios';

const api = axios.create({
    baseURL:'https://microprojeto3-backend.herokuapp.com:3336/'
});

export default api;