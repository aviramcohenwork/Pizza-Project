import React from 'react';
import { connect } from 'react-redux';
import {setTotalPriceAction, removePizzaFromCartAction,removeDrinkFromCartAction} from '../../actions/Actions'
import {Table,Button,Image,Card,Feed} from 'semantic-ui-react';
import cartChoose from '../../pictures/cart.png';
import {reduxForm } from 'redux-form';
import '../../css/PizzaMenu.css'

const CartComponent = (props) => {

    const removeDrinkFromCard = (item)=>
    {
        props.removeDrinkFromCart(item);
        let currentprice = item.drinkPrice;
        let totalPrice = props.totalPrice;
        totalPrice=totalPrice-currentprice;
        props.setTotalPrice(totalPrice);
    }

    const removePizzaFromCard = (item)=>
    {
        props.removePizzaFromCart(item);
        let currentprice = item.pizzaPrice;
        let totalPrice = props.totalPrice;
        totalPrice=totalPrice-currentprice;
        props.setTotalPrice(totalPrice);
    }
    return (
            <div className="row">
                 <div className="col-lg-9">
                    <Image className="topBottomImage" src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"></Image>
                 </div>

                <div className="col-lg-3">
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
                        </Table>
                            <Feed>
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
                                    
                                })},
                                {props.drinkItemsInCart&&props.drinkItemsInCart.map((item,idx)=>
                                {
                                return(
                                    <Feed.Event key={idx}>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Table>
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
                        <Button  id="orderButtonCart" onClick={props.openDeliveryDetailsModal}>Order Now</Button>
                    </Card>

                </div>

            </div>
    );
}

export const mapStateToProps = (state) => {
    return { 
        totalPrice: state.cart.totalPrice,
        drinkItemsInCart : state.cart.DrinkArray,
        pizzaItemsInCart : state.cart.PizzaArray

    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        removePizzaFromCart: (item)=> removePizzaFromCartAction(dispatch,item),
        removeDrinkFromCart: (item)=> removeDrinkFromCartAction(dispatch,item),
        setTotalPrice: (totalprice) => setTotalPriceAction(dispatch,totalprice),
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(CartComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);
