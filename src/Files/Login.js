import React,{Component} from 'react'
import styles from './login.module.css'
import fire from './Config'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom'

class Login extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:''
        }
    }

    submitdata = (e) =>{
        e.preventDefault();
        //fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(()=>{
            alert('Logged in')
        })
        .catch((err)=>{
            alert(err.message);
        })
    }

    loginval = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <div className={styles.outerbox}>
                <div className={styles.innerbox}>
                <h2>InstaChat</h2>

                <form onSubmit={this.submitdata}>
                    <div className={styles.textbox}>
                        <input type="text" placeholder="Phone number, username, or email" name="username" onChange={this.loginval} value={this.state.username}/>
                    </div>

                    <div className={styles.textbox}>
                        <input type="password" placeholder="Password" name="password" onChange={this.loginval} value={this.state.password}/>
                    </div>

                    <button className={styles.btn}>Log In</button>
                </form>    
                    <a> Forget password? </a> 
                    <h6 className={styles.txtAlign}>OR</h6>
                    <a> Log in with Facebook </a>
                    <div className={styles.inline}>
                    <p className={styles.txtAlign}>Don't have an account?</p>
                    <NavLink to="/register" className={styles.textdecoration}>
                        <a>Sign Up</a>
                    </NavLink>
                    </div>
                </div>           
            </div>
        )
    }
}

export default Login