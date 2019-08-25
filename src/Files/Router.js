import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Home from './Home/index';
import Profile from './Profile'
import EditProfile from './Edit'
import Text from './Text';
import Notification from './Notification';

class Router extends Component{
    render() {
        return(

            <switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile} />
                <Route path="/edit" component={EditProfile} />
                <Route path="/text" component={Text} />
                <Route path="/notifications" component={Notification} />
            </switch>

        )
    }
}

export default Router;