const initializeState = {
    orderList: [],
    currentSearch:null,
    currentItem:null
}

export default (state = initializeState, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'ADD_ORDER':
            let arr =[...state.orderList];
            arr.push(action.payload);
            return {...state,orderList:arr};
        case 'GET_ORDERS':  
            debugger;
            return { ...state,orderList:action.payload};
        case 'SEARCH_PARAMETERS':
            debugger;
            return {...state, currentSearch: payload }
        case 'ADD_CURRENT_ITEM':
            return{...state,currentItem:payload}
        default:
            return state;
    }
}