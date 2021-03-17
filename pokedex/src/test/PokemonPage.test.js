import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../components/App';

let container;

beforeEach(() => {
    container = document.createElement("InputGroup.Text");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it("should render main page", () => {
    act(() => {
        ReactDOM.render(<App/>, container);
    })
    expect(container.getElementsByClassName("display-3")
        .item(0).textContent).toBe("Welcome to Pokédex,")
});
