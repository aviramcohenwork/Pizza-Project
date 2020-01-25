import React from 'react';
import { connect } from 'react-redux';
import {insertDrinksToCartAction,insertPizzaToCartAction} from '../../actions/Actions'
import {Table,Button,Image} from 'semantic-ui-react';
import {reduxForm } from 'redux-form';
import '../../css/PizzaMenu.css'

const TableComponent = (props)=> 
{
    const addPizzaToCart = (item) =>
    {
        debugger;
        props.addPizzaToCart(item);
        props.calculateTotalPrice(item);
    };

    const addDrinkToCart = (item) =>
    {
        debugger;
         props.addDrinkToCart(item);
         props.calculateTotalPrice(item);
    };

    return(
        <div>           
        <Table id="tableDrinkPizaaSize" >
            <Table.Header >
                <Table.Row>  
                    <Table.HeaderCell>{props.option.headerName}</Table.HeaderCell>
                    <Table.HeaderCell>Picture</Table.HeaderCell>
                    <Table.HeaderCell>{props.option.headerPrice}</Table.HeaderCell>
                    <Table.HeaderCell id="tableButtonsSize">Press To Add</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body >
                {props.option.item === "drink" && props.pizza.drinkArray && props.pizza.drinkArray.map((item,idx) => 
                <Table.Row key={idx}>
                    <Table.Cell>{item.drinkName}</Table.Cell>
                    <Table.Cell><Image size='tiny' src={item.drinkPicture}></Image></Table.Cell>
                    <Table.Cell>{item.drinkPrice}</Table.Cell> 
                    <Table.Cell><Button id="addToCardDrinksButtons" onClick={()=>addDrinkToCart(item)}>Add To Cart</Button></Table.Cell> 
                </Table.Row>
                )}
                {props.option.item === "pizza" && props.pizza.pizzaArray && props.pizza.pizzaArray.map((item,idx) => 
                <Table.Row key={idx}>
                    <Table.Cell>{item.pizzaName}</Table.Cell>
                    <Table.Cell><Image size='tiny' src={item.pizzaPicture}></Image></Table.Cell>
                    <Table.Cell>{item.pizzaPrice}</Table.Cell> 
                    <Table.Cell><Button id="addToCardDrinksButtons" onClick={()=>addPizzaToCart(item)}>Add To Cart</Button></Table.Cell> 
                </Table.Row>
                )}
            </Table.Body>
        </Table>
        </div>
    );

}
export const mapStateToProps = (state) => {
    return { 
        pizza: state.pizza,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        addDrinkToCart : (item) => insertDrinksToCartAction(dispatch,item),
        addPizzaToCart : (item) => insertPizzaToCartAction(dispatch,item),

    } 
};

const formWrapper = connect(mapStateToProps,mapDispatchToProps)(TableComponent);

export default reduxForm({form: 'MenuForm'})(formWrapper);