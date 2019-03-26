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
        let that = this;

        fetch(api.url + "app")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                that.setState({
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
