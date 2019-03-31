/*eslint no-unused-vars: "off"*/
/**
 * Report display
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import api from './api';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            kmom: props.match.params.kmom,
            kmom_routes: []
        };
    }

    getReport(kmom) {
        fetch(api.url + "reports/kmom/" + kmom)
            .then(response => response.json())
            .then(result => {
                if (result) {
                    this.setState({
                        title: result.title,
                        content: result.content,
                        kmom: kmom
                    });
                }
            });
    }

    getAllReports() {
        fetch(api.url + "reports/kmom/")
            .then(response => response.json())
            .then(result => {
                if (result) {
                    let kmomRoutes = result.routes.map((i) => i.kmom);

                    this.setState({
                        kmom_routes: kmomRoutes
                    });
                }
            });
    }

    reportList() {
        return this.state.kmom_routes.map((nr) => {
            let url = "/reports/kmom/" + nr;

            return <li key={nr}><NavLink exact to={url} >Kmom{nr}</NavLink></li>;
        });
    }

    componentDidMount() {
        if (this.state.kmom) {
            this.getReport(this.state.kmom);
        }
        this.getAllReports();
        document.title = "React App - Redovisningar";
    }

    componentDidUpdate(prevProps) {
        if  (this.props.match.params.kmom && this.props.match.params.kmom !== this.state.kmom) {
            this.getReport(this.props.match.params.kmom);
        }
    }

    render() {
        return (
            <main>
                <nav>
                    <ul>
                        {this.reportList()}
                    </ul>
                </nav>

                <h2>{ this.state.title }</h2>
                <div dangerouslySetInnerHTML={ {__html: this.state.content} } />
            </main>
        );
    }
}

export default Report;
