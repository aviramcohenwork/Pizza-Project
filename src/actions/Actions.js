import pizza from '../api/pizza'
import {ActionTypes} from '../const/ActionsTypes'


//Action for server

export const getMenuDetailsAction = async dispatch => {
    const response = await pizza.get("/menu");
    dispatch({ type: ActionTypes.GET_MENU, payload: response.data });
};

export const addOrderAction = async (dispatch,order) => {
    debugger;
    await pizza.post("/order", order);
    dispatch({ type: ActionTypes.ADD_ORDER, payload: order });
};

export const getOrdersDetailsAction = async dispatch => {
    const response = await pizza.get("/order");
    dispatch({ type: ActionTypes.GET_ORDERS, payload: response.data });
};


//=====================================================================================


//Action to set/get data from store store

export const insertItemToCartAction = (dispatch,item) =>
{
    debugger;
    dispatch({type:ActionTypes.INSERT_ITEM,payload: item})
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
    dispatch({type:ActionTypes.SEARCH_PARAMETERS, payload: inputToSend});
}

export const setTotalPriceAction = (dispatch,totalprice) =>
{
    debugger;
    dispatch({type:ActionTypes.SET_FIRST_PRICE, totalPrice: totalprice});
}

export const removePizzaOrDrinkFromCartAction = (dispatch,item) =>
{
    debugger;
    dispatch({type:ActionTypes.REMOVE_FROM_CART,payload: item})
}


export const addCurrentItemAction = (dispatch,item) =>
{
    debugger;
    dispatch({type:ActionTypes.ADD_CURRENT_ITEM,payload: item})
}


//=====================================================================================






