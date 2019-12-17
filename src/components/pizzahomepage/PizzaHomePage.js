import React from 'react';
import SwiftSlider from 'react-swift-slider';
import {HomePagePictureDataOne} from '../../const/ConstLinks'

import '../../css/HomePage.css';

class PizzaHomePageComponent extends React.Component
{
    render()
    {
        return(
          
            <div >
                 <SwiftSlider height={1080} data={HomePagePictureDataOne}/>
             </div> 
        )
    }
}

export default PizzaHomePageComponent;