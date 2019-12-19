const initializeState = {
    items: [],
    totalPrice: 0,
}
export default (state = initializeState, action) => {
    switch (action.type) {
        case 'INSERT_ITEM':
            debugger;
            let arr=[...state.items];
            arr.push(action.payload);
            return {...state, items: arr }
        case 'REMOVE_FROM_CART':
            debugger
            let helpArr=[...state.items];
            helpArr.splice(helpArr.indexOf(action.payload), 1);
            return {...state, items: helpArr }
        case 'CLEAR_CART':
            return initializeState;
        case 'SET_FIRST_PRICE':
            debugger;
            return {...state,totalPrice:action.totalPrice}
        default:
            return state;
    }
}