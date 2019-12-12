import React from 'react';
import {getMenuDetailsAction,insertItemToCartAction,deliveryModalAction} from '../../actions/Actions'
import { connect } from 'react-redux';
import {Table,Button,Image} from 'semantic-ui-react';
import drinkChoose from '../../pictures/aa.png';
import pizzaChoose from '../../pictures/bb.png';
import {reduxForm } from 'redux-form';
import DetailsModal from './MenuModal';

class PizzaMenuComponent extends React.Component
{
    //Function will activate one time after the render() is running 
    componentDidMount(){
        this.props.getMenuDetails();
    }

    // /** 
    //  * @param item this object id int
    //  * @returns alert with message
    //  * 
    //  */
    addDrinkToCart = (item) =>
    {
         this.props.insertPizzaItem(item);
        alert(item.name +" Add To Cart")
    };

    addPizzaToCart = (item) =>
    {
         this.props.insertPizzaItem(item);
        alert(item.name +" Add To Cart")
    };

    openDeliveryDetailsModal= () =>
    {
        this.props.showDetailsModal((true));
    }
  
    showMenu = () =>
    (
        <div>
            <Image style={{width: "70%",height:"350px", marginLeft: "15%" }} src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"></Image>
            <Button style={{width: "70%", height:"40px",marginLeft: "15%",marginTop:"15px"}} negative onClick={event =>  window.location.href='/'} >Back To Main</Button>
            <Image style={{width: "200",height:"50px", marginLeft: "15%", marginTop: "2%", display:"inline"  }} src={drinkChoose}></Image>
            <Table style={{width: "70%", marginLeft: "15%"}} >
                <Table.Header >
                    <Table.Row>  
                        <Table.HeaderCell>Drink Name</Table.HeaderCell>
                        <Table.HeaderCell>Drink Price</Table.HeaderCell>
                        <Table.HeaderCell style={{ width: "17%"}}>Press To Add</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body >
                    {this.props.pizza.drinks && this.props.pizza.drinks.map((item,idx) => 
                    <Table.Row key={idx}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.price}</Table.Cell> 
                        <Table.Cell><Button onClick={()=>this.addDrinkToCart(item)}>Add To Cart</Button></Table.Cell> 
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <Image style={{width: "200",height:"50px", marginLeft: "15%", marginTop: "2%" }} src={pizzaChoose} ></Image>
            <Table style={{width: "70%", marginLeft: "15%"}} >
                <Table.Header >
                    <Table.Row>  
                        <Table.HeaderCell>Pizza Style</Table.HeaderCell>
                        <Table.HeaderCell>Pizza Price</Table.HeaderCell>
                        <Table.HeaderCell style={{ width: "17%"}}>Press To Add</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body >
                    {this.props.pizza.pizza && this.props.pizza.pizza.map((item,idx) => 
                    <Table.Row key={idx}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.price}</Table.Cell> 
                        <Table.Cell><Button onClick={()=>this.addPizzaToCart(item)}>Add To Cart</Button></Table.Cell> 
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <div>
            <Button style={{width: "70%", height:"60px",marginLeft: "15%",marginBottom:"1%"}} negative onClick={this.openDeliveryDetailsModal}>Order Now</Button>
            </div>
            <Image style={{width: "70%",height:"350px", marginLeft: "15%"}} src="https://static.beyondmenu.com/UploadFiles/21939/SlideShow/20120303040901.jpg"></Image>
            <DetailsModal/>
        </div>
    )

    render()
    {
        return (
            <div>
                {this.showMenu()}
            </div>
            
        )
    }
}
export const mapStateToProps = (state) => {
    return { 
        pizza: state.pizza
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        getMenuDetails : () => getMenuDetailsAction(dispatch),
        showDetailsModal : (modalStatus) =>  deliveryModalAction(dispatch,modalStatus),
        insertPizzaItem: (item) => insertItemToCartAction(dispatch,item),
        insertDrinkItem: (item) => insertItemToCartAction(dispatch,item),
    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(PizzaMenuComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);