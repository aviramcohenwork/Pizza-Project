import React from 'react'
import { Image, Modal} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {deliveryModalAction,clearCartAction,sentOrderAction,getOrderToDelivery,activateDeliveryModalInformationAuction,setOrderStatusAction} from '../../actions/Actions'
import { Field,reduxForm, reset,Form, } from 'redux-form'
import { Button } from 'react-bootstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css'
import '../../css/PizzaMenuModal.css'
import DeliveryInformationModal from '../pizzamenu/DeliveryInformationModal'

class DeliveryDetailsModal extends React.Component
{
    /** 
     * @desc This function uses to open and close delivery detail modal. 
    */
    closeDeliveryDetailsModal= () =>
    {
        this.props.closeDetailsModal((false));
    }
    
    /**
     * @desc Function that change the desing of fields and preview a new design.
     * @param {Object} json Contain all the parameters and the data to change.
     * @return New design with new fields and new data.
     */
    renderInput = ({ input, label,placeholder,className,meta}) => 
    {
        return (
            <div className={className}>
                
                <input { ...input } label={label} type='text' autoComplete="off" placeholder={placeholder} 
                />
            </div>
            );
    };

    /**
      * @desc Function that change the desing of fields and preview a new design.
      * @param {Object} json Contain all the parameters and the data to change.
      * @return New design with new fields and new data.
    */
    renderDropdownList =( ({ input, data, valueField, textField,placeholder ,dropUp,className}) =>
        <DropdownList className={className} {...input}
        placeholder={placeholder}
        dropUp={dropUp}
        data={data}
        valueField={valueField}
        textField={textField}
     />
    
    )
    
    /**
     * @desc This function is used to create order.
     * @return {Object} Contain the new order combine all the details.
     */
    createOrder = (deliveryDetails) =>
    {
        let cartItemsNew = [];
        let Items = {
            PizzaArray:this.props.pizzaCart,
            DrinkArray:this.props.drinkCart
        };
        cartItemsNew.push(Items);
        const order = {
           deliveryDetails:deliveryDetails,
           cartItems:cartItemsNew,
           totalPrice:this.props.totalPrice,
           id:this.props.idNumber,
           orderStatus:this.props.orderStatusInfo
        };

        return order;
    }

    /**
     * @desc This function used to suspend the flow.
    */
    suspending = () =>
    {
        setTimeout(function () {
            this.props.changeDeliveryInformationModelStatus(true);
        }.bind(this),5000);
        
    }

    /**
      * @desc Function get details to delivery and items in cart and combine to one object save in data base and in state, also clear form.
      * @param {Object} deliveryDetails Contain all the delivery address information.
      * @param {ActionType} dispatch contain the dispatch action.
    */
    submitOrder=(deliveryDetails,dispatch)=>
    {
        let order = this.createOrder(deliveryDetails);
        let orders =[order];
        this.props.sentOrder(orders);
        dispatch(reset("DeliveryDetailsModalForm"));
        this.props.clearCart();
        alert("Order Compleate!");
        this.closeDeliveryDetailsModal();
        this.props.getInfo(this.props.idNumber);
        this.suspending();
        
    }

    /**
     * @desc This function to set order status.
     */
    setOrderStatus = () =>
    {
        let orderStatus =" The pizza delivered to shipping department";
        this.props.setOrderStatus(orderStatus);
    }

    

    render()
    {
        if (!this.props.locations){
            console.log("Loading cities");
            return (
                <div>LOADING..........</div>
            );
        }
        
        const cities = Object.values(this.props.locations);

        return (

            <div>

                <Modal id="modalSize" open={this.props.modal.deliveryModalStatus} onClose={this.closeDeliveryDetailsModal} closeIcon>

                    <Modal.Header id="modalHeader"><div id="deliveryMessage">Delivery Details:</div>
                        <Button id="exitButtonModal" onClick={this.closeDeliveryDetailsModal} type='button'>Press To Exit</Button>
                    </Modal.Header>

                    <Modal.Content id="modalContent">

                        <Image src='https://lavu.com/wp-content/uploads/2019/06/Pizza-Delivery-850.jpg' />

                        <Modal.Description>
                            <div>
                                <Form className='ui form' onSubmit={this.props.handleSubmit(this.submitOrder)} >
                                    <Field 
                                        className="fieldsFullName field"
                                        name='fullname'
                                        placeholder="Full Name"
                                        component={this.renderInput}
                                    />
                                    <Field 
                                        className="fieldsStreet field"
                                        name='street'
                                        placeholder="Street"
                                        component={this.renderInput}
                                    />
                                    <Field 
                                        className="fieldsHomeNumber field"
                                        name='homenumber'
                                        placeholder="Home Number"
                                        component={this.renderInput}
                                    />
                                    <Field 
                                        className="fieldsPhoneNumber field"
                                        name='phonenumber'
                                        placeholder="Phone Number"
                                        component={this.renderInput}
                                    />
                                    <Field
                                        className="fieldsCity field"
                                        name="locations"
                                        component={this.renderDropdownList}
                                        data={cities}
                                        valueField="locationDescription"
                                        textField="locationValueName"
                                        placeholder='Choose City'
                                        dropUp={true}
                                        
                                    />
                                    <Button id="orderButton" type='submit'>Order Now</Button>
                                </Form>
                            </div>

                        </Modal.Description>
                        
                    </Modal.Content>
                </Modal>

                <DeliveryInformationModal/>

                {this.setOrderStatus()}

            </div>
        )
    }

}


export const mapStateToProps = (state) => {
    return { 
        modal: state.modal,
        locations: state.pizza.locations,
        pizzaCart: state.cart.PizzaArray,
        drinkCart: state.cart.DrinkArray,
        totalPrice: state.cart.totalPrice,
        idNumber: state.cart.id,
        orderStatusInfo: state.cart.orderStatus
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        closeDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),
        sentOrder : (orders) => sentOrderAction(dispatch,orders),
        clearCart : () => clearCartAction(dispatch),
        getInfo : (ortderIdNumber) => getOrderToDelivery(dispatch,ortderIdNumber),
        changeDeliveryInformationModelStatus : (deliveryModalInformationStatus) => activateDeliveryModalInformationAuction(dispatch,deliveryModalInformationStatus),
        setOrderStatus : (orderStatus) => setOrderStatusAction(dispatch,orderStatus)
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(DeliveryDetailsModal);

export default reduxForm({form: 'DeliveryDetailsModalForm'})(formWrapper);
