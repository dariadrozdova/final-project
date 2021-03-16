import React, { useState, useEffect } from 'react';
import PokemonPage from './PokemonPage';
import Button from 'react-bootstrap/Button';

function CaughtPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [cards, setCards] = useState(14);
    const [notOver, setNotOver] = useState(true);

    const abortController = new AbortController();

    useEffect(() => {
        let url = 'http://localhost:3000/pokemons?caught=true';
        fetch(url,{ signal: abortController.signal })
            .then(response => response.json())
            .then(data => {data = data.map((pokemon) => { return pokemon });
            if (data[0].caught) {
                setPokemon(data)
            }
            });
        return () => {
            abortController.abort();
        };
    });

    const checkMorePokemon = () => {
        if (cards + 14 >= pokemon.length) {
            setNotOver(false);
        }
    }

    const loadMore = () => {
        checkMorePokemon();
        setCards(cards + 14);
    }

    return (
        <div className="d-flex flex-column p-4">
            <div className="d-flex flex-row flex-wrap container-fluid justify-content-around">
                {pokemon.slice(0, cards).map((pokemon, index) => {
                    return(
                        <PokemonPage pokemon={pokemon} key={index}/>
                    )})
                }
            </div>
            <Button
                onClick={loadMore}
                disabled={!notOver}
                variant="info"
                style={{width: "15rem"}}
                className="align-self-center m-4">Load more</Button>
        </div>
    );
}

export default CaughtPokemon;
