import React from 'react';
import { Button,Navbar,Nav} from 'react-bootstrap';
import {Icon, Image} from 'semantic-ui-react'
import SwiftSlider from 'react-swift-slider';
import {HomePagePictureDataOne,HomePagePictureDataTwo} from '../../const/ConstLinks'
import { Link } from 'react-router-dom';
import '../../css/HomePage.css';


class PizzaHomePageComponent extends React.Component
{
    render()
    {
        return(
          
            <div >
                 <SwiftSlider height="1080" data={HomePagePictureDataOne}/>
             </div> 
        )
    }
}

export default PizzaHomePageComponent;