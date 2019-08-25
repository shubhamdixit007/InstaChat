import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class ConnectionPost extends Component {
    render() {
        return (
            <Row style={styles.topbar} className="my-5">
                <Col md={1} className="ml-2">
                    <Image src={'https://via.placeholder.com/60'} roundedCircle />
                </Col>
                <Col md={1}>
                    <h5 className ="my-auto">Name</h5>
                    <p style={styles.location}>Location</p>
                </Col>
                <Col md={{ span: 1, offset: 8 }}>
                    <p className="mr-auto">Time Stamp</p>
                </Col>
                <Col md={12} className="mt-2">
                    <Image src={'https://via.placeholder.com/1200x400'} fluid />
                </Col>
                <Col md={12} className="my-2">
                    <FontAwesomeIcon icon={faHeart} size="2x" className="mr-2" />
                    <FontAwesomeIcon icon={faComment} size="2x" className="mr-2" />
                    <FontAwesomeIcon icon={faPaperPlane} size="2x" className="mr-2" />
                </Col>
            </Row>
        )
    }
}

const styles = {
    topbar:{
        alignItems:'center'
    },
    location:{
        padding:0,
        margin: 0,
        fontSize:14,
        textAlign:"left"
    }
}

export default ConnectionPost
