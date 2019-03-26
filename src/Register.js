/*eslint no-unused-vars: "off", newline-after-var: "off", max-len: "off"*/
/**
 * Registration management
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from './api';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            status: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Register";
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(api.url + "register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    this.setState({
                        status: result.message,
                        username: "",
                        password: ""
                    });
                }
            });
    }

    render() {
        return (
            <main>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Register" />
                    <div>{this.state.status}</div>
                </form>
                <Link to={"/login"}>Login</Link>
            </main>
        );
    }
}

export default Register;
