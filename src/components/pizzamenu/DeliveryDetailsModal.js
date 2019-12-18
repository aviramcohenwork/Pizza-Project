import React from 'react'
import { Image, Modal} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {deliveryModalAction,addOrderAction,clearCartAction} from '../../actions/Actions'
import { Field,reduxForm, reset,Form } from 'redux-form'
import { Button } from 'react-bootstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css'
import '../../css/PizzaMenuModal.css'


class DeliveryDetailsModal extends React.Component
{
    closeDeliveryDetailsModal= () =>
    {
        this.props.closeDetailsModal((false));
    }
    
    renderInput = ({ input, label,placeholder,className}) => 
    {
 
        return (
            <div className={className}>
                
                <input { ...input } label={label} type='text' autoComplete="off" placeholder={placeholder} 
                />
            </div>
            );
    };

    renderDropdownList = ({ input, data, valueField, textField,placeholder ,dropUp,className}) =>
        <DropdownList className={className} {...input}
        placeholder={placeholder}
        dropUp={dropUp}
        data={data}
        valueField={valueField}
        textField={textField}
     />

   
    mySubmit=(deliveryDetails,dispatch)=>
    {
        debugger;
        const order = {deliveryDetails:deliveryDetails, cartItems:this.props.cart};
        this.props.sentOrder(order);
        dispatch(reset("MDeliveryDetailsModalForm"));
        this.props.clearCart();
        alert("Order Compleate!");
        this.closeDeliveryDetailsModal();
        
    }


    render()
    {
        return (
            <Modal id="modalSize" open={this.props.modal.deliveryModalStatus} onClose={this.closeDeliveryDetailsModal} closeIcon>
            <Modal.Header id="modalHeader"><div id="deliveryMessage">Delivery Details:</div>
            <Button id="exitButton" onClick={this.closeDeliveryDetailsModal} type='button'>Press To Exit</Button>
            </Modal.Header>
            <Modal.Content id="modalContent">
              <Image  src='https://lavu.com/wp-content/uploads/2019/06/Pizza-Delivery-850.jpg' />
              <Modal.Description>
                    <div>
                        <Form className='ui form' onSubmit={this.props.handleSubmit(this.mySubmit)} >
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
                                name="city"
                                component={this.renderDropdownList}
                                data={this.props.city}
                                valueField="value"
                                textField="text"
                                placeholder='Choose City'
                                dropUp={true}
                            />
                            <Button id="orderButton" type='submit'>Order Now</Button>
                        </Form>
                    </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
            
        )
    }

}

export const mapStateToProps = (state) => {
    return { 
        modal: state.modal,
        city: state.pizza.city,
        cart: state.cart.items
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        closeDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),
        sentOrder : (order) => addOrderAction(dispatch,order),
        clearCart : () => clearCartAction(dispatch),
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(DeliveryDetailsModal);

export default reduxForm({form: 'DeliveryDetailsModalForm'})(formWrapper);
