import React from 'react';
import { connect } from 'react-redux';
import {getOrdersDetailsAction} from '../../actions/Actions'
import {Table,Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PizzaOrdersComponent extends React.Component
{ 
    
    render()
    {
        return (
            <div>
                {this.props.getOrdersDetailsFormDB()}
                sad
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return{
        getOrdersDetailsFormDB: () => getOrdersDetailsAction(dispatch),
    } 
};



export default connect(null, mapDispatchToProps)(PizzaOrdersComponent);
