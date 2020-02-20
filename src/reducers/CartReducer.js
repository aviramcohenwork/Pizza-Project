const initializeState = {
    DrinkArray: [],
    PizzaArray: [],
    newOrderStatus: null,
    totalPrice: 0,
    orderCreationComplete: false,
    changeStatusForFirst: true,
    changeStatusForSecond:false,
    finishOrderCheck:false
}
export default (state = initializeState, action) => {
    switch (action.type) {
        case 'INSERT_ITEM':
            let arr=[...state.items];
            arr.push(action.payload);
            return {...state, items: arr }
        case 'INSERT_DRINK':
            let newArrDrink=[...state.DrinkArray];
            newArrDrink.push(action.payload);
            return {...state,DrinkArray:newArrDrink }
            
        case 'INSERT_PIZZA':
            let newArrPizza=[...state.PizzaArray];
            newArrPizza.push(action.payload);
            return {...state,PizzaArray:newArrPizza }

        case 'REMOVE_DRINK_FROM_CART':
            let helpArrDrink=[...state.DrinkArray];
            helpArrDrink.splice(helpArrDrink.indexOf(action.payload), 1);
            return {...state, DrinkArray: helpArrDrink }

        case 'REMOVE_PIZZA_FROM_CART':
            let helpArrPizza=[...state.PizzaArray];
            helpArrPizza.splice(helpArrPizza.indexOf(action.payload), 1);
            return {...state, PizzaArray: helpArrPizza }
            
        case 'CLEAR_CART':
            return initializeState;

        case 'SET_FIRST_PRICE':
            return {...state,totalPrice:action.totalPrice}

        case 'ADD_ORDER_ID_NUMBER':
            return {...state, id: action.payload }

        case 'SET_ORDER_STATUS':
            debugger;
            return{...state,orderStatus:action.payload}

        case 'GET_ORDER_STATUS_FROM_MS':
            return{...state,newOrderStatus:action.payload}

        case 'SET_COMPLETE_ORDER':
            return{...state,orderCreationComplete:action.payload}

        case 'CHANGE_STATUS_FOR_FIRST':
            return{...state,changeStatusForFirst:action.payload}

        case 'CHANGE_STATUS_FOR_SECOND':
            return{...state,changeStatusForSecond:action.payload}
        
        case 'CHANGE_TO_FINISH':
            return{...state,finishOrderCheck:action.payload}
        default:
            return state;
    }
}