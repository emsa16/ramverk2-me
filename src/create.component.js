/*eslint no-unused-vars: "off", newline-after-var: "off", max-len: "off"*/
/**
 * Report CRUD Create
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './api';

class CreateIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            kmom: '',
            title: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const JWT_TOKEN = localStorage.getItem("JWT_TOKEN");

        fetch(api.url + "reports/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'x-access-token': JWT_TOKEN
            },
            body: JSON.stringify({
                kmom: this.state.kmom,
                title: this.state.title,
                content: this.state.content
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    this.setState({
                        status: result.message,
                        kmom: '',
                        title: '',
                        content: ''
                    });
                }
            });
    }

    render() {
        return (
            <main>
                <h1>Skapa</h1>
                <Link to={"/admin"}>Tillbaka till admin</Link>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                          Kmom-nummer:
                            <input required name="kmom" type="number" className="form-control" value={this.state.kmom} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                          Titel:
                            <input required name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                          Text:
                            <textarea required rows="40" cols="50" className="form-control" name="content" value={this.state.content} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Spara" />
                    </div>
                    <div>{this.state.status}</div>
                </form>
            </main>
        );
    }
}

export default CreateIndex;
