const initializeState = {
    pictureStatus: true,
    discountNumber:0
}
export default (state = initializeState, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'GET_MENU':  
            return { ...state, ...payload };
        case 'GET_LOCATIONS':
            return { ...state, ...payload };
        case 'GET_DRINKS':
            return { ...state, ...payload };
        case 'GET_COUPONS':
            return {...state, ...payload};
        case 'DISCOUNT_COUPON':
            debugger;
            return {...state, discountNumber:payload};
        case 'HIDE_PICTURE':
            return{...state,pictureStatus:payload}
        default:
            return {...state};
    }
}