import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import CaughtPokemon from "./pages/CaughtPokemon";
import MainPage from "./pages/MainPage";

export default function App() {
    return (
        <div className="d-flex flex-column">
            <header className="sticky-top bg-light">
                <Nav>
                    <Nav.Item className="navbar-brand">
                        <Nav.Link href="/">Pokédex</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/all-pokemons">All Pokémon</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/caught-pokemons">Caught Pokémon</Nav.Link>
                    </Nav.Item>
                    <hr />
                </Nav>
            </header>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/all-pokemons" component={PokemonList}/>
                    <Route exact path="/caught-pokemons" component={CaughtPokemon}/>
                </Switch>
            </Router>
        </div>
    );
}
