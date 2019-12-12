export default (state = {}, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'ADD_ORDER':
            return {...state,...action.payload};
        case 'GET_ORDERS':  
        debugger;
            return { ...state, orderList:[...payload] };
        default:
            return state;
    }
}