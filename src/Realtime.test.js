/*eslint no-unused-vars: "off", no-undef: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import Realtime from './Realtime';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Realtime />, div);
    ReactDOM.unmountComponentAtNode(div);
});
