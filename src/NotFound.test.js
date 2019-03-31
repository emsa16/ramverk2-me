/*eslint no-unused-vars: "off", no-undef: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';

it('renders without crashing', () => {
    const div = document.createElement('div');

    let props = {
        location: {
            pathname: ""
        },
    };

    ReactDOM.render(<NotFound {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
