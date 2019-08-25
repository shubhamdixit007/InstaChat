import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';

class Highlights extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            highlightPictures:['https://via.placeholder.com/80',
            'https://via.placeholder.com/80', 
            'https://via.placeholder.com/80',
            'https://via.placeholder.com/80',
            'https://via.placeholder.com/80',
            'https://via.placeholder.com/80',
            'https://via.placeholder.com/80']            
        }
    }
    
    render() {
        return (
            <>
               {
                   this.state.highlightPictures.map((picture,key)=>
                   <Image src={picture} key={key} roundedCircle></Image>)
               } 
            </>
        )
    }
}

export default Highlights
