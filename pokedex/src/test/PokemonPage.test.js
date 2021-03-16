import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import PokemonPage from '../components/pages/PokemonPage';
import App from '../components/App';

let container;
let pokemon = {
    name: "some_pokemon",
    id: 1
}

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
