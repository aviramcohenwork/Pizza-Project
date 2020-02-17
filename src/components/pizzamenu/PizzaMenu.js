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

class PizzaMenuComponent extends React.Component
{
   /**
    *@desc Lifecycle method will activate the render() again in the end, is running and get details form the json server
   */
    componentDidMount(){
        this.props.getLocationsDetails();
        this.props.getDrinksDetails();
        this.props.getPizzaDetails();
        this.props.getCopuns();
    }

    /**
     * @desc Get a item and enter the itme to total price.
     * @param {Object} item Contain the item details.
     */
    calculateTotalPrice = (item) =>
    {
        if(item.drinkPrice>0)
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
     * @des This function is using to change delivery modal value and open the modal when this function is calling.
     * Add a new random number to the current order.
     */
    openDeliveryDetailsModal= () =>
    {
        this.props.showDetailsModal((true));
        let RandomNumber = Math.floor(Math.random() * 1000000) + 1 ;
        this.props.setOrderIdNumber(RandomNumber)
    }

    /**
     * @desc This function is using to run the menu logic flow.
     * @return HTML view. 
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

                        <Image className="topBottomImage" src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"/>
                        
                        <Image className="chooseDrinkPizzaButtons" src={drinkChoose}/>

                        <TableComponent calculateTotalPrice={this.calculateTotalPrice} option={drinkOption}/>

                        <Image className="chooseDrinkPizzaButtons" src={pizzaChoose}/>

                        <TableComponent calculateTotalPrice={this.calculateTotalPrice} option={pizzaOption}/>

                        <Image id="BottomImage" src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"/>

                        <DeliveryDetailsModal/>

                    </div>
                
                    <div className="five wide column">
                        <CartComponent openDeliveryDetailsModal={this.openDeliveryDetailsModal}/>
                    </div>

                </div>

            </div>
        );
    }

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
 * @desc Function listener to all the current fields and if we got change we run the render function again.
 * @param state Contain all the state information.
*/
export const mapStateToProps = (state) => {
    return { 
        pizza: state.pizza,
        totalPrice: state.cart.totalPrice,
    };
};


/**
  * @desc Function to active a action and sent them to the reudcer.
  * @param {ActionType} dispatch Delivery the dispatch to the functions.
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