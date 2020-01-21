import {Location,PizzaAndDrinks,SaveOrder,GetOrders} from '../api/pizza'
import {ActionTypes} from '../const/ActionsTypes'


//Action for backend server
export const getLocationsDetailsAction = async dispatch => {
    const response = await Location.get("/Locations");
    dispatch({ type: ActionTypes.GET_LOCATIONS, payload: response.data });
};

export const getDrinksDetailsAction = async dispatch => {
    const response = await PizzaAndDrinks.get("/DrinkDetails");
    dispatch({ type: ActionTypes.GET_DRINKS, payload: response.data });
};

export const getPizzaDetailsAction = async dispatch => {
    const response = await PizzaAndDrinks.get("/PizzaDetails");
    dispatch({ type: ActionTypes.GET_MENU, payload: response.data });
};

export const sentOrderAction = async (dispatch,orders) => {
    
    await SaveOrder.post('/SaveOrder',{orders});
    debugger;
    dispatch({ type: ActionTypes.ADD_ORDER, payload: orders });
};

export const addOrderAction = async (dispatch,order) => {
    // debugger;
    // await pizza.post("/order", order);
    // dispatch({ type: ActionTypes.ADD_ORDER, payload: order });
};

export const getOrdersDetailsAction = async dispatch => {
    debugger;
    const response = await GetOrders.get("/GetOrders");
    debugger;
    dispatch({ type: ActionTypes.GET_ORDERS, payload: response.data });
};


//=====================================================================================


//Action to set/get data from store store

export const insertItemToCartAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.INSERT_ITEM,payload: item})
}

export const insertDrinksToCartAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.INSERT_DRINK,payload: item})
}

export const insertPizzaToCartAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.INSERT_PIZZA,payload: item})
}

export const deliveryModalAction = (dispatch,deliveryModalStatus) =>
{
    dispatch({type:ActionTypes.DELIVERY_MODAL_STATUS,deliveryModalStatus});
}

export const clearCartAction = (dispatch) =>
{
    dispatch({type:ActionTypes.CLEAR_CART});
}
export const searchOrderNumberAndPhoneAction = (dispatch,inputToSend) =>
{
    debugger;
    dispatch({type:ActionTypes.SEARCH_PARAMETERS, payload: inputToSend});
}

export const setTotalPriceAction = (dispatch,totalprice) =>
{
    dispatch({type:ActionTypes.SET_FIRST_PRICE, totalPrice: totalprice});
}


export const removeDrinkFromCartAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.REMOVE_DRINK_FROM_CART,payload: item})
}

export const removePizzaFromCartAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.REMOVE_PIZZA_FROM_CART,payload: item})
}


export const addCurrentItemAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.ADD_CURRENT_ITEM,payload: item})
}

export const addIdNumberToOrder = (dispatch,idNumber) =>
{
    dispatch({type:ActionTypes.ADD_ORDER_ID_NUMBER,payload: idNumber})
}


//=====================================================================================






