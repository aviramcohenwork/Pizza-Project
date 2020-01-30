import {Location,PizzaAndDrinks,SaveOrder,GetOrders,Coupuns,DeliveryDepartment} from '../api/pizza'
import {ActionTypes} from '../const/ActionsTypes'


//Call to actions from backend microservices.

/**
 * @desc Call to Locations rest from Location micro service and get the json data from mlab server.
 * @Return {Objcet} Json object contain array of location information.
*/
export const getLocationsDetailsAction = async dispatch => {
    const response = await Location.get("/Locations/GetAllLocations");
    dispatch({ type: ActionTypes.GET_LOCATIONS, payload: response.data });
};

/**
 * @desc Call to Coupons rest from Location micro service and get the json data from mlab server about the existing coupons.
 * @Return {Objcet} Json object contain array of coupons information.
*/
export const getCouponsDetailsAction = async dispatch => {
    const response = await Coupuns.get("/Coupons/GetAllCopuns");
    dispatch({ type: ActionTypes.GET_COUPONS, payload: response.data });
};

/**
 * @desc Call to DrinkDetails rest from menu micro service and get the json data from mlab server about the existing drinks.
 * @Return {Objcet} Json object contain array of drinks information.
*/
export const getDrinksDetailsAction = async dispatch => {
    const response = await PizzaAndDrinks.get("/Menu/DrinkDetails");
    dispatch({ type: ActionTypes.GET_DRINKS, payload: response.data });
};

/**
 * @desc Call to PizzaDetails rest from menu micro service and get the json data from mlab server about the existing pizzas.
 * @Return {Objcet} Json object contain array of pizzas information.
*/
export const getPizzaDetailsAction = async dispatch => {
    const response = await PizzaAndDrinks.get("/Menu/PizzaDetails");
    dispatch({ type: ActionTypes.GET_MENU, payload: response.data });
};

/**
 * @desc Call to SaveOrder rest from menu order service and post the order to mlab data base.
 * @Return {Objcet} Json object contain the response.
*/
export const sentOrderAction = async (dispatch,orders) => {
    
    await SaveOrder.post('/Order/SaveOrder',{orders});
    dispatch({ type: ActionTypes.ADD_ORDER, payload: orders });
};

export const getOrdersDetailsAction = async dispatch => {
    const response = await GetOrders.get("/Order/GetOrders");
    dispatch({ type: ActionTypes.GET_ORDERS, payload: response.data });
};

export const getOrderToDelivery = async (dispatch,orderIdNumber)=> {
    debugger;
    const response = await DeliveryDepartment.get("/Order/GetOrder/" + orderIdNumber);
    debugger;

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

export const setOrderStatusAction = (dispatch,orderStatus) =>
{
    dispatch({type:ActionTypes.SET_ORDER_STATUS, payload: orderStatus});
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


export const hideCopunPicture = (dispatch,picStatus) =>
{
    dispatch({type:ActionTypes.HIDE_PICTURE,payload: picStatus})
}

export const setDiscountPriceAuction = (dispatch,discount) =>
{
    debugger;
    dispatch({type:ActionTypes.DISCOUNT_COUPON,payload: discount})
}

export const activateDeliveryModalInformationAuction = (dispatch,deliveryModalInformationStatus) =>
{
    debugger;
    dispatch({type:ActionTypes.DELIVERY_INFORMATION_MODAL_STATUS,payload: deliveryModalInformationStatus})
}

//=====================================================================================






