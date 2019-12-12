import React from 'react';
import { Button,Navbar,Nav} from 'react-bootstrap';
import {Icon, Image} from 'semantic-ui-react'
import SwiftSlider from 'react-swift-slider';
import {HomePagePictureDataOne,HomePagePictureDataTwo} from '../../const/ConstLinks'

class PizzaHomePageComponent extends React.Component
{
    render()
    {
        return(
            <div >

                <Navbar bg="danger" variant="dark">
                    <Navbar.Brand href="/"><Image height='80px' src="https://www.fasteat.xyz/upload/1559006953-best-italian-pizza-icon-sticker-1542410429.1995544.png"></Image></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/Menu"><Button style={{ marginLeft:'120px',marginBottom:'2%',marginTop:'3%',width:'300px',display:'inline-block',verticalAlign:"-12px"}} variant="dark">Menu</Button></Nav.Link>
                            <Nav.Link href="/Orders"><Button style={{ marginLeft:'120px',marginBottom:'2%',marginTop:'3%',width:'300px',display:'inline-block',verticalAlign:"-12px"}} variant="dark">Orders</Button></Nav.Link>
                            <Nav.Link href="/ContectUs"><Button style={{ marginLeft:'120px',marginBottom:'2%',marginTop:'3%',width:'300px',display:'inline-block',verticalAlign:"-12px"}} variant="dark">Connect Us</Button></Nav.Link>
                            <Nav.Link href="https://www.facebook.com"><Button style={{ height:"55px",background:"blue" ,marginLeft:'120px',marginBottom:'2%',width:'80px',display:'inline-block',verticalAlign:"-12px"}} variant="dark"> <Icon name='facebook' /> Facebook</Button></Nav.Link>
                            <Nav.Link href="https://twitter.com/"><Button style={{height:"55px", background:"#14C7FF" ,marginLeft:'20px',marginBottom:'2%',width:'80px',display:'inline-block',verticalAlign:"-12px"}} variant="dark"> <Icon name='twitter' /> Twitter</Button></Nav.Link>
                            <Nav.Link href="https://www.facebook.com"><Button style={{height:"55px", background:"#AE67F3" ,marginLeft:'20px',marginBottom:'2%',width:'80px',display:'inline-block',verticalAlign:"-12px"}} variant="dark"> <Icon name='instagram' /> Instagram</Button></Nav.Link>
                        </Nav>
                </Navbar>

                <SwiftSlider data={HomePagePictureDataOne}/>
                <SwiftSlider data={HomePagePictureDataTwo}/>

            </div>
        )
    }
}

export default PizzaHomePageComponent;