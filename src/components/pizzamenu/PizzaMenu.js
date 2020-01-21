import React from 'react';
import {getLocationsDetailsAction,getDrinksDetailsAction,getPizzaDetailsAction,
    deliveryModalAction,setTotalPriceAction,
    insertPizzaToCartAction,insertDrinksToCartAction,addIdNumberToOrder, removePizzaFromCartAction,removeDrinkFromCartAction} from '../../actions/Actions'
import { connect } from 'react-redux';
import {Table,Button,Image,Card,Feed} from 'semantic-ui-react';
import drinkChoose from '../../pictures/aa.png';
import cartChoose from '../../pictures/cart.png';
import pizzaChoose from '../../pictures/bb.png';
import {reduxForm } from 'redux-form';
import DeliveryDetailsModal from './DeliveryDetailsModal';
import '../../css/PizzaMenu.css'
class PizzaMenuComponent extends React.Component
{

    /** 
     * input: Empty.
     * output: Activate the render() again in the end.
     * Lifecycle method will activate the render() again in the end, is running and get details form the json server.
    */
    componentDidMount(){
        this.props.getLocationsDetails();
        this.props.getDrinksDetails();
        this.props.getPizzaDetails();
    }

    /**
     * input: Get item with all details about the item.
     * output: Add the item to cart save in state and calculate .
     * Function Add item to cart in state and save the choose.
     */
    addPizzaOrDrinkToCart = (item) =>
    {
        debugger;
         this.props.addPizzaOrDrinkToCart(item);
        this.calculateTotalPrice(item);
    };

    addPizzaToCart = (item) =>
    {
        debugger;
         this.props.addPizzaToCart(item);
        this.calculateTotalPrice(item);
    };

    addDrinkToCart = (item) =>
    {
        debugger;
         this.props.addDrinkToCart(item);
        this.calculateTotalPrice(item);
    };

     /**
     * input: Get item with all details about the item.
     * output: Calculate the price from item.
     * Function Get a item and calcualte the price in item and calculate the total price of all items.
     */
    calculateTotalPrice = (item) =>
    {
        debugger;
        if(item.drinkPrice>0 )
        {
            var currentprice = item.drinkPrice;
            var totalPrice = this.props.totalPrice;
            totalPrice=totalPrice+currentprice;
            this.props.setTotalPrice(totalPrice);
        }
        else if(item.pizzaPrice>0)
        {
            var currentprice = item.pizzaPrice;
            var totalPrice = this.props.totalPrice;
            totalPrice=totalPrice+currentprice;
            this.props.setTotalPrice(totalPrice);
        }
    }

     /**
     * input: Empty
     * output: Change value from false to true
     * Function that change value deliveryModalStatus in state from false to true and open the order modal.
     */
    openDeliveryDetailsModal= () =>
    {
        this.props.showDetailsModal((true));
        let RandomNumber = Math.floor(Math.random() * 10000) + 1 ;
        this.props.setOrderIdNumber(RandomNumber)
    }


     /**
     * input: Get item with all details about the item.
     * output: Remove from state in cart the item that we sent to function, and update total price;
     * Function remove item from cart and update total price.
     */
    removeDrinkFromCard = (item)=>
    {
        this.props.removeDrinkFromCart(item);
        var currentprice = item.drinkPrice;
        var totalPrice = this.props.totalPrice;
        totalPrice=totalPrice-currentprice;
        this.props.setTotalPrice(totalPrice);
    }
    
    removePizzaFromCard = (item)=>
    {
        this.props.removePizzaFromCart(item);
        var currentprice = item.pizzaPrice;
        var totalPrice = this.props.totalPrice;
        totalPrice=totalPrice-currentprice;
        this.props.setTotalPrice(totalPrice);
    }

     /**
     * input: Empty.
     * output: Dummy function to return all information in div.
     * Function display all logic in the menu.
     */
    showMenu = () =>
    (
        <div>
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
                                {this.props.pizzaItemsInCart&&this.props.pizzaItemsInCart.map((item,idx)=>
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
                                                                <Table.Cell id='rowPosition'><Button id='cartButton' onClick={()=>this.removePizzaFromCard(item)}>Remove</Button></Table.Cell> 
                                                            </Table.Row>
                                                        </Table.Body>
                                                    </Table>
                                                </Feed.Summary>
                                            </Feed.Content>
                                        </Feed.Event>
                                    )
                                    
                                })},
                                {this.props.drinkItemsInCart&&this.props.drinkItemsInCart.map((item,idx)=>
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
                                                            <Table.Cell id='rowPosition'><Button id='cartButton' onClick={()=>this.removeDrinkFromCard(item)}>Remove</Button></Table.Cell> 
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
                       <h3 id="totalpricetext">Total Price : {this.props.totalPrice}</h3>
                        <Button  id="orderButtonCart"  onClick={this.openDeliveryDetailsModal}>Order Now</Button>
                    </Card>

                </div>

            </div>

            <Image className="chooseDrinkPizzaButtons" src={drinkChoose}></Image>  
            <Table id="tableDrinkPizaaSize" >
                <Table.Header >
                    <Table.Row>  
                        <Table.HeaderCell>Drink Name</Table.HeaderCell>
                        <Table.HeaderCell>Picture</Table.HeaderCell>
                        <Table.HeaderCell>Drink Price</Table.HeaderCell>
                        <Table.HeaderCell id="tableButtonsSize">Press To Add</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body >
                    {this.props.pizza.drinkArray && this.props.pizza.drinkArray.map((item,idx) => 
                    <Table.Row key={idx}>
                        <Table.Cell>{item.drinkName}</Table.Cell>
                        <Table.Cell><Image size='tiny' src={item.drinkPicture}></Image></Table.Cell>
                        <Table.Cell>{item.drinkPrice}</Table.Cell> 
                        <Table.Cell><Button id="addToCardDrinksButtons" onClick={()=>this.addDrinkToCart(item)}>Add To Cart</Button></Table.Cell> 
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <Image className="chooseDrinkPizzaButtons" src={pizzaChoose} ></Image>
            <Table id="tableDrinkPizaaSize" >
                <Table.Header >
                    <Table.Row>  
                        <Table.HeaderCell>Pizza Style</Table.HeaderCell>
                        <Table.HeaderCell>Picture</Table.HeaderCell>
                        <Table.HeaderCell>Pizza Price</Table.HeaderCell>
                        <Table.HeaderCell id="tableButtonsSize">Press To Add</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body >
                    {this.props.pizza.pizzaArray && this.props.pizza.pizzaArray.map((item,idx) => 
                    <Table.Row key={idx}>
                        <Table.Cell>{item.pizzaName}</Table.Cell>
                        <Table.Cell><Image size='tiny' src={item.pizzaPicture}></Image></Table.Cell>
                        <Table.Cell>{item.pizzaPrice}</Table.Cell> 
                        <Table.Cell><Button id="addToCardPizzaButtons" onClick={()=>this.addPizzaToCart(item)}>Add To Cart</Button></Table.Cell> 
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <Image id="BottomImage" src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"></Image>
            <DeliveryDetailsModal/>
        </div>
    )

    
     /**
     * input: Empty.
     * output: return all the logic.
     * Function activate the menu page.
     */
    render()
    {
        
        return (
            <div>
                {this.showMenu()}
            </div>
            
        )
    }
}


/**
 * input: state
 * output: listener.
 * Function listener to all the current fields and if we got change we run the render function again. 
 */
export const mapStateToProps = (state) => {
    return { 
        pizza: state.pizza,
        totalPrice: state.cart.totalPrice,
        itemsInCart: state.cart.items,
        drinkItemsInCart : state.cart.DrinkArray,
        pizzaItemsInCart : state.cart.PizzaArray

    };
};

/**
 * input: dispatch
 * output: Actions.
 * Function to active a action and sent them to the reudcer and save information in DB. 
 */
export const mapDispatchToProps = (dispatch) => {
    return{
        getLocationsDetails : () => getLocationsDetailsAction(dispatch),
        getDrinksDetails : () => getDrinksDetailsAction(dispatch),
        getPizzaDetails : () => getPizzaDetailsAction(dispatch),
        showDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),

        addDrinkToCart : (item) => insertDrinksToCartAction(dispatch,item),
        addPizzaToCart : (item) => insertPizzaToCartAction(dispatch,item),

        removePizzaFromCart: (item)=> removePizzaFromCartAction(dispatch,item),
        removeDrinkFromCart: (item)=> removeDrinkFromCartAction(dispatch,item),

        setTotalPrice: (totalprice) => setTotalPriceAction(dispatch,totalprice),
        setOrderIdNumber : (idNumber) => addIdNumberToOrder(dispatch,idNumber)

    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(PizzaMenuComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);