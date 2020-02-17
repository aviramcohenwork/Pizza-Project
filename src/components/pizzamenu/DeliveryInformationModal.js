import React from 'react';
import {reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {Table,Button,Image,Card,Modal,Header} from 'semantic-ui-react';
import {activateDeliveryModalInformationAuction} from '../../actions/Actions'
import '../../css/PizzaMenuModal.css';
import PizzaDeliveryProgress from '../../pictures/Pizza Delivery Progress.png'

const DeliveryInformationModal = (props) =>
{

    const closeDeliveryInformationModal= () =>
    {
        props.changeDeliveryInformationModelStatus(false);
    }
    return(
        <div>
            <Modal id='DeliveryInformationModal' open={props.modalStatus&&props.modalStatus} onClose={closeDeliveryInformationModal} closeIcon>
                <Modal.Header><Image src={PizzaDeliveryProgress}/></Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                        {props.orderStatusInfo}
                    </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    </div>
    );

}

export const mapStateToProps = (state) => {
    return { 
        modalStatus: state.modal.deliveryInformationModalStatus,
        orderStatusInfo: state.cart.orderStatus 
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        changeDeliveryInformationModelStatus : (deliveryModalInformationStatus) => activateDeliveryModalInformationAuction(dispatch,deliveryModalInformationStatus)
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(DeliveryInformationModal);

export default reduxForm({form: 'MenuForm'})(formWrapper);