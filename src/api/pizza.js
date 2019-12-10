import axios from 'axios';

//The server url is :http://localhost:3001
export default axios.create({
    baseURL: "http://localhost:3001"
});