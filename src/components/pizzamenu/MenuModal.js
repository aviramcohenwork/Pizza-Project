import React from 'react'
import { Image, Modal} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {deliveryModalAction,addOrderAction,clearCartAction} from '../../actions/Actions'
import { Field,reduxForm, reset,Form } from 'redux-form'
import { Button } from 'react-bootstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css'


class DetailsModal extends React.Component
{
    closeDeliveryDetailsModal= () =>
    {
        this.props.closeDetailsModal((false));
    }
    
    renderInput = ({ input, label,placeholder,style}) => 
    {
 
        return (
            <div className="field" style={style} >
                
                <input { ...input } label={label} type='text' autoComplete="off" placeholder={placeholder} 
                />
            </div>
            );
    };

    renderDropdownList = ({ input, data, valueField, textField,style,placeholder ,dropUp}) =>
        <DropdownList style={style} {...input}
        placeholder={placeholder}
        dropUp={dropUp}
        data={data}
        valueField={valueField}
        textField={textField}
     />

   
    mySubmit=(deliveryDetails,dispatch)=>
    {
        const order = {deliveryDetails:deliveryDetails, cartItems:this.props.cart};
        this.props.sentOrder(order);
        dispatch(reset("MenuModalForm"));
        this.props.clearCart();
        alert("Order Compleate!");
        this.closeDeliveryDetailsModal();
        
    }


    render()
    {
        return (
            <Modal open={this.props.modal.deliveryModalStatus} onClose={this.closeDeliveryDetailsModal} style={{height: "600px",marginLeft:"20%",marginTop:"5%"  }}closeIcon>
            <Modal.Header>Delivery Details:
            <Button onClick={this.closeDeliveryDetailsModal} style={{marginTop:"-50px", marginLeft:'740px',width:'120px'}} variant="danger" type='button'>Press To Exit</Button>
            </Modal.Header>
            <Modal.Content style={{padding:"3%",content:"10%" }}>
              <Image  src='https://lavu.com/wp-content/uploads/2019/06/Pizza-Delivery-850.jpg' />
              <Modal.Description>
                    <div>
                        <Form className='ui form' onSubmit={this.props.handleSubmit(this.mySubmit)} >
                            <Field 
                                name='fullname'
                                placeholder="Full Name"
                                style={{marginTop:'2%',marginRight:'2%',width:'200px',display:'inline-block' }} 
                                component={this.renderInput}
                            />
                            <Field 
                                name='street'
                                placeholder="Street"
                                style={{marginTop:'2%',width:'200px',display:'inline-block'}} 
                                component={this.renderInput}
                            />
                            <Field 
                                name='homenumber'
                                placeholder="Home Number"
                                style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%', width:'200px',display:'inline-block'}} 
                                component={this.renderInput}
                            />
                            <Field 
                                name='phonenumber'
                                placeholder="Phone Number"
                                style={{marginTop:'1%',marginLeft:'1px',marginRight:'2%', width:'200px',display:'inline-block'}} 
                                component={this.renderInput}
                            />
                            <Field
                                name="city"
                                component={this.renderDropdownList}
                                data={this.props.city}
                                valueField="myvalue"
                                textField="text"
                                placeholder='Choose City'
                                dropUp={true}
                                style={{verticalAlign:'-10px',marginLeft:'-2px',marginTop:'1%', width:'200px',display:'inline-block'}}
                            />
                            <Button style={{ marginLeft:'2%',marginBottom:'2%',width:'200px',display:'inline-block',verticalAlign:"-12px"}} variant="danger" type='submit'>Order Now</Button>
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
        cart: state.cart
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        closeDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),
        sentOrder : (order) => addOrderAction(dispatch,order),
        clearCart : () => clearCartAction(dispatch),
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(DetailsModal);

export default reduxForm({form: 'MenuModalForm'})(formWrapper);
