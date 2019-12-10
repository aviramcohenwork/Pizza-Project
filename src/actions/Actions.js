import pizza from '../api/pizza'
import {ActionTypes} from '../const/ActionsTypes'


//Action for server

export const getMenuDetailsAction = async dispatch => {
    const response = await pizza.get("/menu");
    dispatch({ type: ActionTypes.GET_MENU, payload: response.data });
};

export const addOrderAction = async (dispatch,order) => {
    const response = await pizza.post("/order", order);
    dispatch({ type: ActionTypes.ADD_ORDER, payload: response.data });
};

//=====================================================================================


//Action to set/get data from store store

export const insertItemToCartAction = (dispatch,item) =>
{
    dispatch({type:ActionTypes.INSERT_ITEM,item})
}

export const deliveryModalAction = (dispatch,deliveryModalStatus) =>
{
    dispatch({type:ActionTypes.DELIVERY_MODAL_STATUS,deliveryModalStatus});
}

export const clearCartAction = (dispatch) =>
{
    dispatch({type:ActionTypes.CLEAR_CART});
}
//=====================================================================================






