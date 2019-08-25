import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Account from './Account';
import {Switch, Route} from 'react-router-dom'
import Contacts from './Contacts';
import ChangePassword from './ChangePassword';

class EditProfile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item active>Edit Profile</ListGroup.Item>
                            <ListGroup.Item>Change Password</ListGroup.Item>
                            <ListGroup.Item>Contacts</ListGroup.Item>
                            <ListGroup.Item>Privacy & Security</ListGroup.Item>
                            <ListGroup.Item>Donate</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path="/" component={Account} />
                            <Route path="/contact" component={Contacts} />
                            <Route path="/password" component={ChangePassword} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EditProfile