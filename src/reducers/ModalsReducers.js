export default (state = {}, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'DELIVERY_MODAL_STATUS':
            return {...state,deliveryModalStatus:action.deliveryModalStatus}
        case 'DELIVERY_INFORMATION_MODAL_STATUS':
            return {...state,deliveryInformationModalStatus:payload}
        default:
            return state;
    }
}