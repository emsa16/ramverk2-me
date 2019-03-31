/*eslint no-unused-vars: "off", no-undef: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
});
