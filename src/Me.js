/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import api from './api';

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        fetch(api.url + "index")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    message: result.msg
                });
            });

        document.title = "React App - Hem";
    }

    render() {
        return (
            <main dangerouslySetInnerHTML={ {__html: this.state.message} } />
        );
    }
}

export default Me;
