import React from 'react';
import { Button,Navbar} from 'react-bootstrap';
import {Icon, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../../css/HomePage.css';

const PizzaNavBar = () =>
{
    return(
             
        <div className = "row mycolornav">
            <div className="col-lg-1 ">
                <Navbar.Brand href="/">
                    <Image height='80px' src="https://www.fasteat.xyz/upload/1559006953-best-italian-pizza-icon-sticker-1542410429.1995544.png"></Image>
                </Navbar.Brand>
            </div>

            <div className="col-lg-7 buttoninlink ">

                <Link to="/Menu" className="linkbuttonstag">
                    <Button className="buttoninlink">Menu</Button>
                </Link>

                <Link to="/Orders" className="linkbuttonstag">
                    <Button className="buttoninlink">Orders</Button>
                </Link>

                <Link to="/ContectUs" className="linkbuttonstag">
                    <Button className="buttoninlink">Connect Us</Button>
                </Link>

            </div>

            <div className="col-lg-4 iconlink">

                <a href="https://www.facebook.com" className="linkicontag">
                    <Button className="iconbuttons">
                        <Icon  name='facebook'/>Facebook
                    </Button>
                </a>

                <a href="https://twitter.com/" className="linkicontag">
                    <Button className="iconbuttons">
                        <Icon  name='twitter'/>Twitter
                    </Button>
                </a>

                <a href="https://www.facebook.com" className="linkicontag">
                    <Button className="iconbuttons">
                        <Icon   name='instagram'/>Instagram
                    </Button>
                </a>

            </div>
        
    </div>
    )
}


export default PizzaNavBar;