import { combineReducers } from 'redux';
import PizzaMenuReducer from './PizzaMenuReducer';
import { reducer as formReducer } from 'redux-form';
import CartReducer from './CartReducer';
import ModalsReducers from './ModalsReducers';
import OrderReducer from './OrderReducer';

export default combineReducers({
    pizza: PizzaMenuReducer,
    form: formReducer,
    cart: CartReducer,
    modal: ModalsReducers,
    order: OrderReducer
});