const initializeState = {
    orderList: [],
    currentSearch:null,
    currentItem:null
}

export default (state = initializeState, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'ADD_ORDER':
            debugger;
            let index = Object.keys(state.orderList).length; // take the next index of input
            let helper = {[index]: payload[0]}; // create new object in the next key index
            let orderListNew = {...state.orderList, ...helper}
            return {...state,orderList:orderListNew};
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