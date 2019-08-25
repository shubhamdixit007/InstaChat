import React, { Component } from 'react'
import styles from './login.module.css'
import fire from './Config'
import {NavLink} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             name:'',
             username:'',
             password:''
        }
    }

    // emailval = (e) =>{
    //     this.setState({
    //         email:e.target.value
    //     })
    // }

    // nameval = (e) =>{
    //     this.setState({
    //         name:e.target.value
    //     })
    // }

    // usernameval = (e) =>{
    //     this.setState({
    //         username:e.target.value
    //     })
    // }

    // passwordval = (e) =>{
    //     this.setState({
    //         password:e.target.value
    //     })
    // }

    submitdata = (e) =>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)}

    formval = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div className={styles.outerbox}>
                <div className={styles.innerbox}>
                <h2>InstaChat</h2>

                <h4 className={styles.txtAlign}>Sign up to see photos and videos from your friends.</h4>

                <button className={styles.btn}>Log In with Facebook</button>

                <h6 className={styles.txtAlign}>OR</h6>

                <form onSubmit={this.submitdata}>

                <div className={styles.textbox}>
                    <input type="text" placeholder="Mobile Number or Email" name="email" onChange={this.formval} value={this.state.email}/>
                </div>

                <div className={styles.textbox}>
                    <input type="text" placeholder="Full Name" name="name" onChange={this.formval} value={this.state.name}/>
                </div>

                <div className={styles.textbox}>
                    <input type="text" placeholder="Username" name="username" onChange={this.formval} value={this.state.username}/>
                </div>

                <div className={styles.textbox}>
                    <input type="password" placeholder="Password" name="password" onChange={this.formval} value={this.state.password}/>
                </div>

                <button className={styles.btn}>Sign Up</button>

                </form> 

                <p className={styles.txtAlign}>Have an account?</p>
                <NavLink to="/login" className={styles.textdecoration}>
                    <a> Log in</a>
                </NavLink>
                </div>
            </div>
        )
    }
}

export default Register
