import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

class Notification extends Component {
    render() {
        const ActiveTime =[21,23,46,1,34,6,34,9,56,3]
        return (
            <Container>
            <Row>
                <Col md={10} className="mx-auto">
                <ListGroup>
                    <ListGroup.Item active>Your Notifications</ListGroup.Item>
                    {ActiveTime.map((time,key)=>
                        <ListGroup.Item key={key} >
                            <Image src={'https://via.placeholder.com/40'} roundedCircle className="mr-3" inline />
                            <p inline>Friend {key+1}</p>
                            <p inline>{time} min ago</p>
                            <Image src={'https://via.placeholder.com/50'} className="ml-3" inline/>  
                        </ListGroup.Item>)}
                </ListGroup>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default Notification
