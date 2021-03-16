import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import PokemonPage from '../components/pages/PokemonPage';
import App from '../components/App';
import { FormControl } from 'react-bootstrap';
import backgroundImage from '/src/assets/backgrounds/pattern.png';

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
        .item(0).textContent).toBe("Welcome to Pokédex, !")
})











it("should render pokemon card", () => {
    act(() => {
        ReactDOM.render(<App><PokemonPage pokemon={pokemon}/></App>, container);
    })
    expect(container.getElementsByClassName("top-name center-block text-center")
        .item(0).textContent).toBe("Welcome to Pokédex, !")
})

// it('can render and catch pokemon', () => {
//     // Тестируем первый рендер и эффект
//
//     act(() => {
//         ReactDOM.render(<PokemonPage pokemon={pokemon}/>, container);
//     });
//
//
//     const caughtButton = container.querySelector(CaughtButton);
//     const button = container.querySelector(Button);
//     // const label = container.querySelector('p');
//     expect(button.textContent).toBe('Catch!');
//     expect(caughtButton.textContent).toBe('Catch!');
//     // expect(document.title).toBe('Вы кликнули 0 раз');
//
//     // Тестируем второй рендер и эффект
//     act(() => {
//         button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//     });
//     expect(button.textContent).toBe('Caught!');
//     expect(caughtButton.textContent).toBe('Caught!');
// });
