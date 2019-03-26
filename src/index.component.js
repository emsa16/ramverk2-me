/*eslint no-unused-vars: "off"*/
/**
 * Report CRUD index
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './api';
import TableRow from './TableRow';

class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: []
        };

        this.getReports = this.getReports.bind(this);
    }

    componentDidMount() {
        this.getReports();
    }

    getReports() {
        fetch(api.url + "reports/kmom")
            .then(response => response.json())
            .then(result => {
                if (result) {
                    this.setState({
                        reports: result.routes
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    tabRow() {
        return this.state.reports.map((object, i) => {
            return <TableRow obj={object} key={i} onChange={this.getReports} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Redovisningstexter</h3>
                <Link to={"/admin/create/"} className="btn btn-primary">Lägg till ny text</Link>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Kmom</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminIndex;
