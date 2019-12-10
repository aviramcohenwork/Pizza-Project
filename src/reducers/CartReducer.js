const variables ={
    cart:[]
}
export default (state = [], action) => {
    switch (action.type) {
        case 'INSERT_ITEM':
            return [...state,{...action.item} ]
        case 'CLEAR_CART':
            return variables.cart
        default:
            return state;
    }
}