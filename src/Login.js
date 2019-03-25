/*eslint no-unused-vars: "off", newline-after-var: "off", max-len: "off"*/
/**
 * Login management
 */

import React, { Component } from 'react';

const apiUrl = 'http://localhost:3000/';
// const apiUrl = 'https://api.emilsandberg.com/';

class Login extends Component {
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
        document.title = "Login";
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        let that = this;

        event.preventDefault();

        fetch(apiUrl + "login", {
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

                    if (result.token) {
                        localStorage.setItem("JWT_TOKEN", result.token);
                    }
                }
            });
    }

    render() {
        return (
            <main>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Login" />
                    <div>{this.state.status}</div>
                </form>
                <a href="/register">Register</a>
            </main>
        );
    }
}

export default Login;
