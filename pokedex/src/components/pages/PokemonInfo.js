import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import { getPokemonById } from '../../redux/actions/getPokemon';

function PokemonInfo() {
    const [caught, setCaught] = useState(false);
    const [pokemon, setPokemon] = useState('');
    const pathname = window.location.pathname;
    let id = pathname.substring(pathname.lastIndexOf('/') + 1);
    let server = `http://localhost:3000/pokemons/${id}`;

    useEffect(() => {
        getPokemonById(server, setPokemon, setCaught);
    }, []);

    let name = pokemon.name;
    function ucFirst(name) {
        if (!name) return name;
        return name[0].toUpperCase() + name.slice(1);
    }

    return(
        <Container className="d-flex flex-row justify-content-center p-3">
            <Card border={"info"} style={{ width: "24rem" }} id={id} className="m-2">
                <Card.Title className="p-3">
                    <h2 className="top-name center-block text-center">{ucFirst(name)}</h2>
                    <h5 className="top-name center-block text-center">ID: {id}</h5>
                </Card.Title>
                <Card.Img variant="top" src={require(`../../assets/${id}.png`)}/>
                <Card.Subtitle className="text-muted center-block text-center p-5">
                    {pokemon.caught ? 'STATUS: caught on' : 'STATUS: not caught'} {pokemon.date}
                </Card.Subtitle>
            </Card>
        </Container>
    )
}

export default PokemonInfo;
