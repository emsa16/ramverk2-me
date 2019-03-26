/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Me from './Me.js';
import About from './About.js';
import Realtime from './Realtime.js';
import Chat from './Chat.js';
import Report from './Report.js';
import Login from './Login.js';
import Logout from './Logout.js';
import Register from './Register.js';
import AdminIndex from './index.component.js';
import AdminCreate from './create.component';
import AdminEdit from './edit.component';
import NotFound from './NotFound.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        const isLoggedIn = null !== localStorage.getItem("JWT_TOKEN");

        this.state = {
            isLoggedIn: isLoggedIn,
        };

        this.handleLoginToken = this.handleLoginToken.bind(this);
    }

    handleLoginToken(token) {
        if (token) {
            localStorage.setItem("JWT_TOKEN", token);
            this.setState({isLoggedIn: true});
        } else {
            localStorage.removeItem("JWT_TOKEN");
            this.setState({isLoggedIn: false});
        }
    }

    loginLinks() {
        if (this.state.isLoggedIn) {
            return (
                <span>
                    <li><NavLink to="/logout">Log out</NavLink></li>
                    <li><NavLink to="/admin">Admin</NavLink></li>
                </span>
            );
        } else {
            return (
                <span>
                    <li><NavLink to="/login">Login</NavLink></li>
                </span>
            );
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="site-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="site-title">Emils me-sida</div>
                        <div className="site-slogan">Att använda ramverk i Javascript</div>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Hem</NavLink></li>
                            <li><NavLink to="/about">Om</NavLink></li>
                            <li><NavLink to="/chat">Chat</NavLink></li>
                            <li><NavLink to="/app">Appen</NavLink></li>
                            { this.loginLinks() }
                            <li><NavLink to="/report/kmom/01">Kmom01</NavLink></li>
                            <li><NavLink to="/report/kmom/02">Kmom02</NavLink></li>
                            <li><NavLink to="/report/kmom/03">Kmom03</NavLink></li>
                            <li><NavLink to="/report/kmom/04">Kmom04</NavLink></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={Me} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/chat" component={Chat} />
                        <Route exact path="/app" component={Realtime} />
                        <Route path="/report/kmom/:kmom" component={Report} />
                        <Route exact path="/login" component={() => <Login
                            isLoggedIn={this.state.isLoggedIn}
                            onLoginChange={this.handleLoginToken}
                        />} />
                        <Route exact path="/logout" component={() => <Logout
                            isLoggedIn={this.state.isLoggedIn}
                            onLoginChange={this.handleLoginToken}
                        />} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/admin" component={AdminIndex} />
                        <Route exact path='/admin/create' component={ AdminCreate } />
                        <Route path='/admin/edit/:kmom' component={ AdminEdit } />
                        <Route component={NotFound} />
                    </Switch>

                    <div className="site-footer">
                        <hr />
                        <p>&copy; Copyright 2019 Emil Sandberg</p>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
