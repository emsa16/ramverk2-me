/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "React App - 404";
    }

    render() {
        return (
            <main>
                <h1>404 Sidan kunde inte hittas</h1>
                <p>Vi kunde inte hitta någon sida för följande sökväg:</p>
                <p><code>{this.props.location.pathname}</code></p>
            </main>
        );
    }
}

export default NotFound;
