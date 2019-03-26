/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import api from './api';

class Realtime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        fetch(api.url + "app")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    message: result.msg
                });
            });
        document.title = "React App - Appen";
    }

    render() {
        return (
            <main dangerouslySetInnerHTML={ {__html: this.state.message} } />
        );
    }
}

export default Realtime;
