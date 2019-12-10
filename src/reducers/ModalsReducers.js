export default (state = {}, action) => {
    switch (action.type) {
        case 'DELIVERY_MODAL_STATUS':
                return {...state,deliveryModalStatus:action.deliveryModalStatus}
        default:
            return state;
    }
}