/*eslint no-unused-vars: "off"*/
/**
 * Report display
 */

import React, { Component } from 'react';

import api from './api';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            kmom: props.match.params.kmom
        };
    }

    getReport(kmom) {
        let that = this;

        fetch(api.url + "reports/kmom/" + kmom)
            .then(response => response.json())
            .then(result => {
                if (result) {
                    that.setState({
                        title: result.title,
                        content: result.content,
                        kmom: kmom
                    });
                }
            });
    }

    componentDidMount() {
        this.getReport(this.state.kmom);
        document.title = "React App - Redovisningar";
    }

    componentDidUpdate(prevProps) {
        if  (this.props.match.params.kmom !== this.state.kmom) {
            this.getReport(this.props.match.params.kmom);
        }
    }

    render() {
        return (
            <main>
                <h2>{ this.state.title }</h2>
                <div dangerouslySetInnerHTML={ {__html: this.state.content} } />
            </main>
        );
    }
}

export default Report;
