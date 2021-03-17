import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { catchPokemon } from '../getPokemon/getPokemon';

function PokemonPage(props) {
    const [caught, setCaught] = useState(false);

    useEffect(() => {
        setCaught(props.pokemon.caught);
    }, []);

    let fetchedPokemon = props.pokemon;
    let status = caught ? "Caught" : "Catch";

    const CaughtButton = () => (
        <Button disabled={caught} onClick={() => {
            catchPokemon(fetchedPokemon.id, fetchedPokemon.name, setCaught);
        }} variant="info">{status}</Button>
    )
        return(
            <Card border={"info"} style={{ width: "12rem" }} id={fetchedPokemon.id} className="m-2">
                <Card.Title className="top-name center-block text-center">
                    {(fetchedPokemon.name).toUpperCase()}
                </Card.Title>
                <Link to={`all-pokemon/${fetchedPokemon.id}`}>
                    <Card.Img variant="top" src={require(`../../assets/${fetchedPokemon.id}.png`)}/>
                </Link>
                {window.location.pathname === '/caught-pokemon' ? null : <CaughtButton />}
            </Card>
        )
}

export default PokemonPage;
