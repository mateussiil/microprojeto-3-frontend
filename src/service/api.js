import axios from 'axios';

const api = axios.create({
    baseURL:'https://microprojeto3-backend.herokuapp.com/'
});

export default api;