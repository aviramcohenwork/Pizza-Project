export default (state = {}, action) => {
    const  {payload} = action;
    switch (action.type) {
        case 'GET_MENU':  
            return { ...state, ...payload };
        default:
            return {...state};
    }
}