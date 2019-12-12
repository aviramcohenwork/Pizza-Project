import React from 'react';
import { connect } from 'react-redux';
import {getOrdersDetailsAction} from '../../actions/Actions'
import {Table,Button,Image} from 'semantic-ui-react';

class PizzaOrdersComponent extends React.Component
{ 
     componentDidMount(){
         //debugger;
         this.props.getOrdersDetailsFormDB();
     }
    
    render()
    {
        
        debugger;
        return (
            <div>
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
                    {this.props.order.map((item,idx) => 
                        <Table.Row key={idx}>
                            <Table.Cell>{item.deliveryDetails.fullname}</Table.Cell>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.deliveryDetails.phonenumber}</Table.Cell>
                            <Table.Cell>{item.deliveryDetails.city.myvalue}</Table.Cell>
                            <Table.Cell>{item.cartItems.map((secItem,index)=> {
                                return(<p key={index}>{secItem.name}</p>);
                            }
                                )}</Table.Cell>
                            <Table.Cell>Deliverd</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
                </Table>
                }
            </div>
        )
    }

}
 const mapStateToProps = (state) => {
    return{
        order: state.order.orderList
    } 
};


const mapDispatchToProps = (dispatch) => {
    return{
        getOrdersDetailsFormDB: () => getOrdersDetailsAction(dispatch),
    } 
};



export default connect(mapStateToProps, mapDispatchToProps)(PizzaOrdersComponent);
