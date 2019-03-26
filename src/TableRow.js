/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './api';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        const JWT_TOKEN = localStorage.getItem("JWT_TOKEN");

        fetch(api.url + 'reports/delete/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'x-access-token': JWT_TOKEN
            },
            body: JSON.stringify({
                kmom: this.props.obj.kmom
            }),
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    render() {
        const kmom = this.props.obj.kmom;

        return (
            <tr>
                <td>
                    <Link to={"/report/kmom/"+kmom}>{kmom}</Link>
                </td>
                <td>
                    <Link to={"/admin/edit/"+kmom} className="btn btn-secondary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
