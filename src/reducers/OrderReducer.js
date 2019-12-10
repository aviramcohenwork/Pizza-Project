export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {...state,...action.payload};
        default:
            return state;
    }
}