import React from 'react';
import {getLocationsDetailsAction,getDrinksDetailsAction,getPizzaDetailsAction,
    deliveryModalAction,setTotalPriceAction,addIdNumberToOrder,getCouponsDetailsAction} from '../../actions/Actions'
import { connect } from 'react-redux';
import {Image} from 'semantic-ui-react';
import pizzaChoose from '../../pictures/bb.png';
import {reduxForm } from 'redux-form';
import DeliveryDetailsModal from './DeliveryDetailsModal';
import '../../css/PizzaMenu.css'
import CartComponent from './CartComponent';
import TableComponent from './TableComponent';
import drinkChoose from '../../pictures/aa.png';
import PromotionsComponent from "../pizzamenu/PromotionsComponent"

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
        this.props.getCopuns();
    }


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
            let currentprice = item.drinkPrice;
            let totalPrice = this.props.totalPrice;
            totalPrice=totalPrice+currentprice;
            this.props.setTotalPrice(totalPrice);
        }
        else if(item.pizzaPrice>0)
        {
            let currentprice = item.pizzaPrice;
            let totalPrice = this.props.totalPrice;
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
     * input: Empty.
     * output: Dummy function to return all information in div.
     * Function display all logic in the menu.
     */
    showMenu = () =>
    {
        const pizzaOption = {
            headerName: "Pizza Style",
            headerPrice: "Pizza Price",
            item: "pizza"
        };

        const drinkOption = {
            headerName: "Drink Name",
            headerPrice: "Drink Price",
            item: "drink"
        };
        return (
            <div className='ui grid'>
                <div className='row ui doubling stackable'> 
                    <div className="eleven wide column">
                        <Image className="topBottomImage" src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"></Image>
                        
                        <Image className="chooseDrinkPizzaButtons" src={drinkChoose}></Image>  

                        <TableComponent calculateTotalPrice={this.calculateTotalPrice} option={drinkOption}/>

                        <Image className="chooseDrinkPizzaButtons" src={pizzaChoose} ></Image>

                        <TableComponent calculateTotalPrice={this.calculateTotalPrice} option={pizzaOption}/>

                        <Image id="BottomImage" src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"></Image>

                        <DeliveryDetailsModal/>
                    </div>
                
                    <div className="five wide column">
                        <CartComponent openDeliveryDetailsModal={this.openDeliveryDetailsModal}  />
                        {/* <PromotionsComponent/> */}
                    </div>
                </div>
            </div>
        );
        
    }

    
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
        setTotalPrice: (totalprice) => setTotalPriceAction(dispatch,totalprice),
        setOrderIdNumber : (idNumber) => addIdNumberToOrder(dispatch,idNumber),
        getCopuns : () => getCouponsDetailsAction(dispatch)

    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(PizzaMenuComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);