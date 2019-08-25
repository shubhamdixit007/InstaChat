import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

class PersonalDetails extends Component {
    render() {
        return (
            <Row>
                <Col md={3}>
                  <Image src="https://via.placeholder.com/150" roundedCircle />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h2>Username</h2>
                        </Col>
                        <Col>
                            <NavLink to='/edit'>
                            <Button variant="outline-primary" style={styles.liBtn}>Edit Profile</Button>
                            </NavLink>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span>342 Posts</span>
                        </Col>
                        <Col>
                            <span>342 Followers</span>
                        </Col>
                        <Col>
                            <span>342 Following</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Bio</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

const styles ={
    liBtn:{
        fontWeight:600
    }
}

export default PersonalDetails
