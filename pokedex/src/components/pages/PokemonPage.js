import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PokemonPage(props) {
    const [caught, setCaught] = useState(false);

    useEffect(() => {
        setCaught(props.pokemon.caught);
    }, [])

    const catchPokemon = (pokemonId, pokemonName) => {
        let server = 'http://localhost:3000/pokemons/' + pokemonId;
        let date = new Date();
        let today = ([date.getDate(), ('0' + (date.getMonth() + 1)), date.getFullYear()]).join('-');
        fetch(server, {
            method: 'PUT',
            body: JSON.stringify({
                id: pokemonId,
                name: pokemonName,
                caught: true,
                date: today
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(() => setCaught(true))
    }

    let fetchedPokemon = props.pokemon;
    let status = caught ? "Caught" : "Catch";

    const CaughtButton = () => (
        <Button disabled={caught} onClick={() => {
            catchPokemon(fetchedPokemon.id, fetchedPokemon.name);
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
