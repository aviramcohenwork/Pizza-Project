import React from 'react';
import { connect } from 'react-redux';
import {getOrdersDetailsAction,searchOrderNumberAndPhoneAction,deliveryModalAction,addCurrentItemAction} from '../../actions/Actions'
import {Table, Segment ,Form as myForm,Container,Button,Modal,Card,Divider,Image} from 'semantic-ui-react';
import { Field,reduxForm, } from 'redux-form'
import '../../css/PizzaOrder.css';

class PizzaOrdersComponent extends React.Component
{ 
    /** 
     * input: Empty.
     * output: Activate the render() again in the end.
     * Lifecycle method will activate the render() again in the end, is running and get details from the json server.
    */
     componentDidMount(){
         this.props.getOrdersDetailsFormDB();
     }

     filterOrder= (searchParameters)=>
     {
         debugger;
        this.props.order.map((item,idx) => 
        {
            if(item.deliveryDetails.fullname.startsWith(searchParameters.searchByName))
            {
                this.props.getOrderDetailsByNameOrPhoneFromDB(item);
            }
        }
        )


     }

     renderInput = ({input,name, className,classNameGroup, label,placeholder,id,data,onChange}) => 
     {
         return (
            <Container>
            <myForm.Group className={classNameGroup}  >
                <myForm.Input
                className={className} 
                id={id}
                name={name}
                input={input}
                autoComplete="off"
                label={label}
                placeholder={placeholder}
                data={data}
                onChange={onChange}            
                />
            </myForm.Group>
            </Container>
             );
     };

     getChange = (e) =>
     {
        debugger;
        console.log(e.target.value);
        this.props.searchOrderNumberAndPhone(e.target.value);
     }

     checkName = (item) =>
     {
        if(item != null){
            let fullname = (item.deliveryDetails.fullname).toLowerCase()
            return(fullname); 
         }else{
              let fullname = (item.deliveryDetails.fullname);
              return (fullname);
         }
     }

     closeDeliveryDetailsModal= () =>
     {
         this.props.closeDetailsModal((false));
     }

     openDeliveryDetailsModal= (item) =>
     {
         debugger;
        this.props.showDetailsModal((true));
        this.props.addCurrentItem(item);
     }

     detailsModalDisplay = (item) =>
    {
         console.log(item);
         debugger;
         return(
            <Modal id="modalOrderSize" open={this.props.modal&&this.props.modal} onClose={this.closeDeliveryDetailsModal} closeIcon>
                <Modal.Header id="modalHeader"><div id="deliveryMessage">Order Details:</div>
                    <Button id="exitButton" onClick={this.closeDeliveryDetailsModal}>Press To Exit</Button>
                </Modal.Header>
            <Modal.Content id="modalContent">
              <Modal.Description>
                    <div className="row">
                        <div className="col-lg-9">
                            <p className="detailsInformation">Full Name : {item.deliveryDetails.fullname}</p>
                            <p className="detailsInformation">Street : {item.deliveryDetails.street}</p>
                            <p className="detailsInformation">Home Number : {item.deliveryDetails.homenumber}</p>
                            <p className="detailsInformation">Phone Number : {item.deliveryDetails.phonenumber}</p>
                            <p className="detailsInformation">City : {item.deliveryDetails.locations.locationDescription}</p>
                            <p className="detailsInformation">Total Price : {item.totalPrice}</p>
                            <p className="detailsInformation">Order Status : {item.orderStatus}</p>
                        </div>
                        <div className="col-lg-3">
                            <Image src="https://www.fasteat.xyz/upload/1559006953-best-italian-pizza-icon-sticker-1542410429.1995544.png"></Image>
                        </div>

                        {/* <Card.Group items={items} /> */}
                    </div>
                    <Divider horizontal inverted>
                    <p id="deliveryMessageOrder">Order Items:</p>
                    </Divider>
                    <Card.Group>
                    {item.cartItems[0].DrinkArray&&item.cartItems[0].DrinkArray.map((item)=>
                    {
                        return(
                            <Card>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='tiny'
                                    src={item.drinkPicture}
                                    />
                                    <Card.Header >Item</Card.Header>
                                    <Card.Description >
                                    <strong>Name:</strong> {item.drinkName}
                                    <p><strong>Price:</strong> {item.drinkPrice}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        );
                    })}
                    {item.cartItems[0].PizzaArray&&item.cartItems[0].PizzaArray.map((item)=>
                    {
                        return(
                            <Card>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='tiny'
                                    src={item.pizzaPicture}
                                    />
                                    <Card.Header >Item</Card.Header>
                                    <Card.Description >
                                    <strong>Name:</strong> {item.pizzaName}
                                    <p><strong>Price:</strong> {item.pizzaPrice}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        );
                    })}

                    </Card.Group>
                    

              </Modal.Description>
            </Modal.Content>
        </Modal>);
     }
     
     mymethod = () =>
     {
         console.log("pizza method")
     }
    
    render()
    {
        debugger;
        return (
            <div>
                <Segment inverted>
                    <h1 id="searchHeader">Search Your Order</h1>
                        <Field  
                            className="field"
                            id="searchNameButton"
                            label='Search By Name Or Number : '
                            placeholder="Enter Name"
                            component={this.renderInput}
                            name='searchByName'
                            classNameGroup="groupDesign"
                            onChange={this.getChange}                                                                                 
                        />                       
                </Segment>

                {this.props.order && Object.keys(this.props.order).length > 0 && 
                <Table >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Order Number</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Order List</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Total Price</Table.HeaderCell>
                            <Table.HeaderCell>Receipt</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                   
                    <Table.Body >
                        {Object.values(this.props.order).map((item,idx) =>{
                            
                            let itemName = this.checkName(item);
                            let propSearch = this.props.search;
                            if(propSearch != null  ){
                                propSearch  = this.props.search.toLowerCase();
                            }
                            if(propSearch!=null){
                            if(itemName.startsWith(propSearch) || item.deliveryDetails.phonenumber.startsWith(this.props.search))
                            {   
                                return(
                                <Table.Row key={idx}>
                                <Table.Cell>{item.deliveryDetails.fullname}</Table.Cell>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.deliveryDetails.phonenumber}</Table.Cell>
                                <Table.Cell>{item.deliveryDetails.locations.locationDescription}</Table.Cell>
                                <Table.Cell>{item.cartItems[0].DrinkArray && item.cartItems[0].DrinkArray.map((drinkItem,index)=> 
                                {
                                    return(
                                        <p key={index}>{drinkItem.drinkName}</p>
                                    );
                                }
                                )}
                                {item.cartItems[0].PizzaArray && item.cartItems[0].PizzaArray.map((pizzaItem,index)=> 
                                {
                                    return(
                                        <p key={index}>{pizzaItem.pizzaName}</p>
                                    );
                                }
                                )}</Table.Cell>
                                <Table.Cell>{item.orderStatus}</Table.Cell>
                                <Table.Cell>{item.totalPrice}</Table.Cell>
                                <Table.Cell><Button id="detailsButtons" onClick={()=>this.openDeliveryDetailsModal(item)}>Details</Button></Table.Cell>
                                {this.props.current&&this.detailsModalDisplay(this.props.current)}
                            </Table.Row>)
                            }}})}
                    </Table.Body>
  
                </Table>
                }
            </div>
        )
    }//()=>this.openDeliveryDetailsModal(item)
}
 const mapStateToProps = (state) => {
     
    return{
        order: state.order.orderList.Order,
        search: state.order.currentSearch,
        modal: state.modal.deliveryModalStatus,
        current: state.order.currentItem

    } 
};


const mapDispatchToProps = (dispatch) => {
    return{
        getOrdersDetailsFormDB: () => getOrdersDetailsAction(dispatch),
        searchOrderNumberAndPhone: (inputToSend) =>searchOrderNumberAndPhoneAction(dispatch,inputToSend),
        closeDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),
        showDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),
        addCurrentItem: (item) => addCurrentItemAction(dispatch,item)
       
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(PizzaOrdersComponent);

export default reduxForm({form: 'OrderForm'})(formWrapper);
