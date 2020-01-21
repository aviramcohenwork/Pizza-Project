import axios from 'axios';

//The server url is :http://localhost:3001
// export default axios.create({
//     baseURL: "http://localhost:3001"
// });

export const Location = axios.create({
    baseURL: "http://localhost:8080"
});

export const PizzaAndDrinks = axios.create({
    baseURL: "http://localhost:8081"
});

export const SaveOrder = axios.create({
    baseURL: "http://localhost:8082"
});

export const GetOrders = axios.create({
    baseURL: "http://localhost:8082"
});



