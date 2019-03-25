/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';

const apiUrl = 'https://api.emilsandberg.com/';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        let that = this;

        fetch(apiUrl + "about")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                that.setState({
                    message: result.msg
                });
            });

        document.title = "React App - Om";
    }

    render() {
        return (
            <main dangerouslySetInnerHTML={ {__html: this.state.message} } />
        );
    }
}

export default About;
