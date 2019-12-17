import React from 'react';
import { connect } from 'react-redux';
import {getOrdersDetailsAction,searchOrderNumberAndPhoneAction} from '../../actions/Actions'
import {Table, Segment ,Form as myForm,Container} from 'semantic-ui-react';
import { Field,reduxForm, } from 'redux-form'
import '../../css/PizzaOrder.css';
class PizzaOrdersComponent extends React.Component
{ 
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
    
    render()
    {
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

                {this.props.order && this.props.order.length > 0 && 
                <Table >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Order Number</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Order List</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                   
                    <Table.Body >
                        {this.props.order.map((item,idx) =>{
                            let itemName = this.checkName(item)
                            let propSearch = this.props.search;
                            if(propSearch != null  ){
                                propSearch  = this.props.search.toLowerCase();
                            }
                            if(itemName.startsWith(propSearch) || item.deliveryDetails.phonenumber.startsWith(this.props.search))
                            {   
                                return(
                                <Table.Row key={idx}>
                                <Table.Cell>{item.deliveryDetails.fullname}</Table.Cell>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.deliveryDetails.phonenumber}</Table.Cell>
                                <Table.Cell>{item.deliveryDetails.city.myvalue}</Table.Cell>
                                <Table.Cell>{item.cartItems.length>0&&item.cartItems.map((secItem,index)=> {
                                    return(
                                        <p key={index}>{secItem.name}</p>);
                                }
                                )}</Table.Cell>
                                <Table.Cell>Deliverd</Table.Cell>
                            </Table.Row>)
                            }})}
                    </Table.Body>
                </Table>
                }
            </div>
        )
    }
}
 const mapStateToProps = (state) => {
    return{
        order: state.order.orderList,
        search: state.order.currentSearch

    } 
};


const mapDispatchToProps = (dispatch) => {
    return{
        getOrdersDetailsFormDB: () => getOrdersDetailsAction(dispatch),
        searchOrderNumberAndPhone: (inputToSend) =>searchOrderNumberAndPhoneAction(dispatch,inputToSend)
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(PizzaOrdersComponent);

export default reduxForm({form: 'OrderForm'})(formWrapper);
