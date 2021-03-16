import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CaughtPokemon from "./pages/CaughtPokemon";
import MainPage from "./pages/MainPage";
import AllPokemon from "./pages/AllPokemon";
import Container from 'react-bootstrap/Container';
import PokemonInfo from './pages/PokemonInfo';
import Col from 'react-bootstrap/Col';
import backgroundImage from '/src/assets/backgrounds/pattern.png';


export default function App() {
    return (
        <div className="d-flex flex-column" style={{minHeight: "100vh", background: `url(${backgroundImage})`}}>
                <Navbar sticky="top" variant="dark" bg="info">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Col sm={4}>
                            <Navbar.Brand href="/">Pokédex</Navbar.Brand>
                        </Col>
                        <Col sm={8}>
                            <Nav>
                                <Col>
                                    <Nav.Link href="/all-pokemon">All Pokémon</Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link href="/caught-pokemon">Caught Pokémon</Nav.Link>
                                </Col>
                            </Nav>
                        </Col>
                    </Container>
                </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/all-pokemon" component={AllPokemon}/>
                    <Route path="/all-pokemon/:id" component={PokemonInfo}/>
                    <Route exact path="/caught-pokemon" component={CaughtPokemon}/>
                </Switch>
            </Router>
        </div>
    );
}
