/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavLink from "./NavLink.js";
import Me from './Me.js';
import About from './About.js';
import Report from './Report.js';
import NotFound from './NotFound.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
                            <li><NavLink to="/">Hem</NavLink></li>
                            <li><NavLink to="/about">Om</NavLink></li>
                            <li><NavLink to="/report/kmom01">Kmom01</NavLink></li>
                            <li><NavLink to="/report/kmom02">Kmom02</NavLink></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={Me} />
                        <Route exact path="/about" component={About} />
                        <Route path="/report/:kmom" component={Report} />
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
