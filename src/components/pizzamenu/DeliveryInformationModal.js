import React from 'react';
import {reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {Image,Modal,Header} from 'semantic-ui-react';
import {activateDeliveryModalInformationAuction,getOrderStatusAction,changeStatusForFirstAction,changeSecondStatusForSecondAction,clearCartAction,changeFinishAction} from '../../actions/Actions'
import '../../css/PizzaMenuModal.css';
import PizzaDeliveryProgress from '../../pictures/Pizza Delivery Progress.png'

const DeliveryInformationModal = (props) =>
{
    const checkUpdateOfStatus = (newOrderStatusResult) =>
    {
        debugger;
        if(newOrderStatusResult==null && props.checkOrderCreationComplete == true)
        {
            debugger;
            setTimeout(
                function() {
                    props.changeFirstStatus(false);
                    props.getOrderStatusFromMSBE(props.orderIdNumber);

                }
                .bind(this),
                3000
            );
            setTimeout(
                function() {
                    props.changeSecondStatus(true);
                    props.getOrderStatusFromMSBE(props.orderIdNumber);

                }
                .bind(this),
                4000
            );
            setTimeout(
                function() {
                    props.changeSecondStatus(false);
                    props.getOrderStatusFromMSBE(props.orderIdNumber);

                }
                .bind(this),
                8000
            );
            setTimeout(
                function() {
                    props.changeSecondStatus(true);
                }
                .bind(this),
                13000
            );

            setTimeout(
                function() {
                    props.changeToFinish(true);
                    props.changeDeliveryInformationModelStatus(false);
                }
                .bind(this),
                19000
            );
        }
    }

    const closeDeliveryInformationModal= () =>
    {
        props.changeDeliveryInformationModelStatus(false);
    }

    return(
        <div>
            <Modal id='DeliveryInformationModal' open={props.modalStatus&&props.modalStatus} onClose={closeDeliveryInformationModal} closeIcon>
                <Modal.Header><Image src={PizzaDeliveryProgress}/></Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://www.pomodorokataphuket.com/wp-content/uploads/2015/05/POMOKATA.png' />
                <Modal.Description>
                    <h2>
                        <p> 
                            <b>   
                            {props.changeStatusForFirst&&props.orderStatusInfo}
                            {checkUpdateOfStatus(props.newOrderStatusResult)}
                            {props.changeStatusForSecond&&props.newOrderStatusResult.orderStatus&&props.newOrderStatusResult.orderStatus}
                            {props.finishOrderCheck&&props.clearCart()}
                            </b>   
                        </p>
                    </h2>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    </div>
    );
}

export const mapStateToProps = (state) => {
    return { 
        modalStatus: state.modal.deliveryInformationModalStatus,
        orderStatusInfo: state.cart.orderStatus,
        orderIdNumber: state.cart.id,
        newOrderStatusResult : state.cart.newOrderStatus,
        checkOrderCreationComplete: state.cart.orderCreationComplete,
        changeStatusForFirst: state.cart.changeStatusForFirst,
        changeStatusForSecond: state.cart.changeStatusForSecond,
        finishOrderCheck: state.cart.finishOrderCheck
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        changeDeliveryInformationModelStatus : (deliveryModalInformationStatus) => activateDeliveryModalInformationAuction(dispatch,deliveryModalInformationStatus),
        getOrderStatusFromMSBE : (orderIdNumber) => getOrderStatusAction(dispatch,orderIdNumber),
        changeFirstStatus: (val) => changeStatusForFirstAction(dispatch,val),
        changeSecondStatus: (vall) => changeSecondStatusForSecondAction(dispatch,vall),
        clearCart : () => clearCartAction(dispatch),
        changeToFinish: (valll) => changeFinishAction(dispatch,valll)

    }
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(DeliveryInformationModal);

export default reduxForm({form: 'MenuForm'})(formWrapper);