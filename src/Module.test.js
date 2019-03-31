/*eslint no-unused-vars: "off", no-undef: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import Module from './Module';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Module />, div);
    ReactDOM.unmountComponentAtNode(div);
});
