/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        let that = this;

        fetch("https://me.emilsandberg.com/index")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                that.setState({
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
