import React from 'react';
import {reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {hideCopunPicture} from '../../actions/Actions'
import {Table,Button,Image,Card} from 'semantic-ui-react';
import cartChoose from '../../pictures/cart.png';
import '../../css/PizzaMenu.css'
import promotionChoose from '../../pictures/button-coupon-codes.png';
import pizzaDiscountTen from  '../../pictures/10%PIZZA.png'
import pizzaDiscountFive from  '../../pictures/Pizza5$.png'
import pizzaDiscountThree from  '../../pictures/3%PIZZA.png'

const PromotionsComponent = (props)=>
{    
    const hiddenPictures = () =>
    {
        props.hiddenPicture(false);
    }
    
    return(
        <Card id="startDividerPromotions">
           <Button id='promoButtonImage' onClick={hiddenPictures}>{props.couponPizza&&<Image id='promoPic' src={promotionChoose} size='medium'></Image>}</Button>
            {!props.couponPizza&& <Image id='promoPic' src={pizzaDiscountTen} size='medium'></Image>}
            {!props.couponPizza&& <Image id='promoPic' src={pizzaDiscountFive} size='medium'></Image>}
            {!props.couponPizza&& <Image id='promoPic' src={pizzaDiscountThree} size='medium'></Image>}
        </Card>
        
        
    );
}

export const mapStateToProps = (state) => {
    return { 
        pizza: state.pizza,
        couponPizza : state.pizza.pictureStatus

    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        hiddenPicture : (picStatus) => hideCopunPicture(dispatch,picStatus)
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(PromotionsComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);