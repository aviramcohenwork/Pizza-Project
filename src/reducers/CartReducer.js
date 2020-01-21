const initializeState = {
    DrinkArray: [],
    PizzaArray: [],
    totalPrice: 0,
}
export default (state = initializeState, action) => {
    switch (action.type) {
        case 'INSERT_ITEM':
            debugger;
            let arr=[...state.items];
            arr.push(action.payload);
            return {...state, items: arr }
        case 'INSERT_DRINK':
            debugger;
            let newArrDrink=[...state.DrinkArray];
            newArrDrink.push(action.payload);
            return {...state,DrinkArray:newArrDrink }
            
        case 'INSERT_PIZZA':
            debugger;
            let newArrPizza=[...state.PizzaArray];
            newArrPizza.push(action.payload);
            return {...state,PizzaArray:newArrPizza }

        case 'REMOVE_DRINK_FROM_CART':
            debugger
            let helpArrDrink=[...state.DrinkArray];
            helpArrDrink.splice(helpArrDrink.indexOf(action.payload), 1);
            return {...state, DrinkArray: helpArrDrink }

        case 'REMOVE_PIZZA_FROM_CART':
            debugger
            let helpArrPizza=[...state.PizzaArray];
            helpArrPizza.splice(helpArrPizza.indexOf(action.payload), 1);
            return {...state, PizzaArray: helpArrPizza }
            
        case 'CLEAR_CART':
            return initializeState;
        case 'SET_FIRST_PRICE':
            debugger;
            return {...state,totalPrice:action.totalPrice}
        case 'ADD_ORDER_ID_NUMBER':
            debugger
            return {...state, id: action.payload }
        default:
            return state;
    }
}