import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPokemons from "./components/pages/AllPokemons";
import CaughtPokemons from "./components/pages/CaughtPokemons";
import MainPage from "./components/pages/MainPage";
import PokemonPage from "./components/pages/PokemonPage";

export default function App() {
    const [pokedex, setPokedex] = useState([]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Pokédex</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <span className="navbar-toggler-icon"></span>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/all-pokemons" class="nav-link">All Pokémon</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/caught-pokemons" class="nav-link">Caught Pokémon</Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component={MainPage}>
                    <MainPage />
                </Route>
                <Route path="/all-pokemons" exact component={AllPokemons}>
                    <AllPokemons />
                </Route>
                <Route path="/caught-pokemons" exact component={CaughtPokemons}>
                    <CaughtPokemons />
                </Route>
            </Switch>
        </div>
    );
}
