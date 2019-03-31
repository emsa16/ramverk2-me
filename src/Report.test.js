/*eslint no-unused-vars: "off", no-undef: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import Report from './Report';

it('renders without crashing', () => {
    const div = document.createElement('div');

    let props = {
        match: {
            params: {
                kmom: ""
            }
        },
    };

    ReactDOM.render(<Report {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
