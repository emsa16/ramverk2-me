/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.props.onLoginChange("");
    }

    render() {
        return <Redirect to='/' />;
    }
}

export default Logout;
