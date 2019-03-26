/*eslint no-unused-vars: "off", newline-after-var: "off", max-len: "off"*/
/**
 * Registration management
 */

import React, { Component } from 'react';

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
        let that = this;

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
                    that.setState({status: result.message});
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
                <a href="/login">Login</a>
            </main>
        );
    }
}

export default Register;
