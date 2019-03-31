/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import api from './api';

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        fetch(api.url + "module")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    message: result.msg
                });
            });

        document.title = "React App - Modulen";
    }

    render() {
        return (
            <main dangerouslySetInnerHTML={ {__html: this.state.message} } />
        );
    }
}

export default Module;
