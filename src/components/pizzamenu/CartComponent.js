import React from 'react';
import { connect } from 'react-redux';
import {setTotalPriceAction, removePizzaFromCartAction,removeDrinkFromCartAction,setDiscountPriceAuction} from '../../actions/Actions'
import {Table,Button,Image,Card,Feed,Input,Segment} from 'semantic-ui-react';
import cartChoose from '../../pictures/cart.png';
import {reduxForm } from 'redux-form';
import '../../css/PizzaMenu.css'
import PromotionsComponent from "../pizzamenu/PromotionsComponent"

const CartComponent = (props) => {
    
    const calculatePriceAndDiscount = (calcDiscount) =>
    {
        console.log(calcDiscount);
        let cureentTotalPrice = props.totalPrice;
        let newTotalPrice = (cureentTotalPrice - calcDiscount);
        props.setTotalPrice(newTotalPrice);
    }

    const checkPromotion= (e) =>
    {   
        debugger;
        {props.copuns && props.copuns.map((item,idx) => 
            {
                if(item.couponCode==e.target.value)
                {
                    switch (item.couponCode) {
                        case 'PIZZA10':
                            let calcDiscount10 = (props.totalPrice *10)/100;
                            props.setDiscountPrice(calcDiscount10);
                            calculatePriceAndDiscount(calcDiscount10);
                          return alert("Success")
                        case 'PIZZA5':
                            let calcDiscount5 = (props.totalPrice -5);
                            props.setDiscountPrice(calcDiscount5);
                            calculatePriceAndDiscount(calcDiscount5);
                          return ;
                        case 'PIZZA3':
                            let calcDiscount3 = (props.totalPrice *3)/100;
                            props.setDiscountPrice(calcDiscount3);
                            calculatePriceAndDiscount(calcDiscount3);
                          return ;
                      }
                }
            }
        )}
    }

    const removeDrinkFromCard = (item)=>
    {
        if(props.discountNumber>0)
        {
            props.removeDrinkFromCart(item);
            let currentprice = item.drinkPrice-props.discountNumber;
            let totalPrice = props.totalPrice;
            totalPrice=totalPrice-currentprice;
            props.setTotalPrice(totalPrice);
            props.setDiscountPrice(0);
        }
        else{
        props.removeDrinkFromCart(item);
        let currentprice = item.drinkPrice;
        let totalPrice = props.totalPrice;
        totalPrice=totalPrice-currentprice;
        props.setTotalPrice(totalPrice);
        }
    }

    const removePizzaFromCard = (item)=>
    {
        if(props.discountNumber>0)
        {
            let currentprice = item.pizzaPrice-props.discountNumber;;
            let totalPrice = props.totalPrice;
            totalPrice=totalPrice-currentprice;
            props.setTotalPrice(totalPrice);
            props.setDiscountPrice(0);
        }
        else{
        props.removePizzaFromCart(item);
        let currentprice = item.pizzaPrice;
        let totalPrice = props.totalPrice;
        totalPrice=totalPrice-currentprice;
        props.setTotalPrice(totalPrice);
        }
    }
    return (
        <Card id="startDivider">
            <Card.Content>
                <Card.Header> <Image src={cartChoose}></Image></Card.Header>
            </Card.Content>
            <Card.Content>
            <Table>
                <Table.Header >
                    <Table.Row>  
                        <Table.HeaderCell> Name</Table.HeaderCell>
                        <Table.HeaderCell> Picture</Table.HeaderCell>
                        <Table.HeaderCell> Price</Table.HeaderCell>
                        <Table.HeaderCell> Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table >
                <Feed >
                    {props.pizzaItemsInCart&&props.pizzaItemsInCart.map((item,idx)=>
                    {
                        return(
                            <Feed.Event key={idx}>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Table>
                                            <Table.Body>
                                                <Table.Row key={idx}>
                                                    <Table.Cell id='itemName'>{item.pizzaName}</Table.Cell>
                                                    <Table.Cell><Image id="minPicture" src={item.pizzaPicture}></Image></Table.Cell>
                                                    <Table.Cell id='itemprice'>{item.pizzaPrice}</Table.Cell> 
                                                    <Table.Cell id='rowPosition'><Button id='cartButton' onClick={()=>removePizzaFromCard(item)}>Remove</Button></Table.Cell> 
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                        )
                        
                    })}
                    {props.drinkItemsInCart&&props.drinkItemsInCart.map((item,idx)=>
                    {
                    return(
                        <Feed.Event key={idx} >
                            <Feed.Content >
                                <Feed.Summary>
                                    <Table >
                                        <Table.Body>
                                            <Table.Row key={idx}>
                                                <Table.Cell id='itemName'>{item.drinkName}</Table.Cell>
                                                <Table.Cell><Image id="minPicture" src={item.drinkPicture}></Image></Table.Cell>
                                                <Table.Cell id='itemprice'>{item.drinkPrice}</Table.Cell> 
                                                <Table.Cell id='rowPosition'><Button id='cartButton' onClick={()=>removeDrinkFromCard(item)}>Remove</Button></Table.Cell> 
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    )
                    }
                    )}
                </Feed>
            </Card.Content>
            <h3 id="totalpricetext">Total Price : {props.totalPrice}</h3>
            <Segment inverted>
                <Input className='textBoxPromotion' actionPosition='left' placeholder='Enter Promotion Code' onChange={checkPromotion}></Input>
            </Segment>
            <Button  id="orderButtonCart" onClick={props.openDeliveryDetailsModal}>Order Now</Button>
            <PromotionsComponent/>
        </Card>
        
        
    );
}

export const mapStateToProps = (state) => {
    return { 
        totalPrice: state.cart.totalPrice,
        drinkItemsInCart : state.cart.DrinkArray,
        pizzaItemsInCart : state.cart.PizzaArray,
        copuns: state.pizza.coupons,
        discountNumber: state.pizza.discountNumber
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        removePizzaFromCart: (item)=> removePizzaFromCartAction(dispatch,item),
        removeDrinkFromCart: (item)=> removeDrinkFromCartAction(dispatch,item),
        setTotalPrice: (totalprice) => setTotalPriceAction(dispatch,totalprice),
        setDiscountPrice: (discount) => setDiscountPriceAuction(dispatch,discount)
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(CartComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);
