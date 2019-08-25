import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'

class NavMenu extends Component {
    render() {      
        return (
            <Container style={styles.bg}>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <NavLink to="/" style={styles.logoStyle}>InstaChat</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline  style={styles.searchBar}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary" style={styles.searchBtn}>Search</Button>
                        </Form>
                        <Nav className="ml-auto">
                            <NavLink to="/text">
                                <FontAwesomeIcon icon={faPaperPlane} style={styles.iconStyle} />    
                            </NavLink>
                            <NavLink to="/notifications">
                                <FontAwesomeIcon icon={faHeart} style={styles.iconStyle} />
                            </NavLink>        
                            <NavLink to="/profile">
                                <FontAwesomeIcon icon={faUser} style={styles.iconStyle} />
                            </NavLink>
                        
                        </Nav>
                    
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

const styles = {
    searchBar:{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconStyle:{
        margin: '0px 12px',
        fontSize:24
    },
    logoStyle:{
        fontSize:32,
        textDecoration:'none',
        color:'#000000',
        fontWeight:700
    },
    bg:{
        background: '#ffffff'
    },
    searchBtn:{
        fontWeight:600
    }
}

export default NavMenu
