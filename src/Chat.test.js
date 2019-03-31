/*eslint no-unused-vars: "off", no-undef: "off"*/
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';

let scrollIntoViewMock = jest.fn();

window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Chat />, div);
    ReactDOM.unmountComponentAtNode(div);
});
