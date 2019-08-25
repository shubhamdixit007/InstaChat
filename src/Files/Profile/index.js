import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails';
import PersonalPosts from './PersonalPosts';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Highlights from './Highlights';

class Profile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} className="my-3">
                        <PersonalDetails />
                    </Col>
                    <Col md={12} className="my-5" style={styles.highlightPictures}>
                        <Highlights />
                    </Col>
                    <Col md={12} className="my-3">
                        <PersonalPosts />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const styles = {
    highlightPictures:{
        display:'flex',
        justifyContent:'space-around'
    }
}

export default Profile