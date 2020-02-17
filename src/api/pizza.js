import axios from 'axios';

/**
 *@Desc Create a link to the next url address. 
*/
export const Location = axios.create({
    baseURL: "http://localhost:8080"
});

/**
 *@Desc Create a link to the next url address. 
*/
export const Coupuns =  axios.create({
    baseURL: "http://localhost:8080"
});

/**
 *@Desc Create a link to the next url address. 
*/
export const PizzaAndDrinks = axios.create({
    baseURL: "http://localhost:8081"
});

/**
 *@Desc Create a link to the next url address. 
*/
export const SaveOrder = axios.create({
    baseURL: "http://localhost:8082"
});

/**
 *@Desc Create a link to the next url address. 
*/
export const GetOrders = axios.create({
    baseURL: "http://localhost:8082"
});

/**
 *@Desc Create a link to the next url address. 
*/
export const DeliveryDepartment = axios.create({
    baseURL: "http://localhost:8083"
})



