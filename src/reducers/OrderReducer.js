export default (state = {}, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'ADD_ORDER':
            return {...state,...action.payload};
        case 'GET_ORDERS':  
            return { ...state, orderList:[...payload] };
        case 'SEARCH_PARAMETERS':
            debugger;
            return {...state, currentSearch: payload }
        default:
            return state;
    }
}