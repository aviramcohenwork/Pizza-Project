export default (state = {}, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'GET_MENU':  
            return { ...state, ...payload };
        case 'GET_LOCATIONS':
            return { ...state, ...payload };
        case 'GET_DRINKS':
            return { ...state, ...payload };
        default:
            return {...state};
    }
}