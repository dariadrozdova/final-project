import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [cards, setCards] = useState(20);
    const [notOver, setNotOver] = useState(true);

    const abortController = new AbortController();

    useEffect(() => {
        let url = 'http://localhost:3000/pokemons';
        fetch(url,{ signal: abortController.signal })
            .then(response => response.json())
            .then(data => {data = data.map((pokemon) => { return pokemon });
                setPokemon(data)
            });
        return () => {
            abortController.abort();
        };
    });

    const checkMorePokemon = () => {
        if (cards + 15 >= pokemon.length) {
            setNotOver(false);
        }
    }

    const loadMore = () => {
        checkMorePokemon();
        setCards((prev) => {
            return {cards: prev.cards + 15};
        });
    }

    return(
        <div className="d-flex flex-column justify-content-center p-1">
            <div className="d-flex flex-row flex-wrap container-fluid justify-content-around">
                {pokemon.slice(0, cards).map((pokemon, index) => {
                    return(
                        <PokemonPage pokemon={pokemon} key={index}/>
                    )})
                }
            </div>
            <button
                onClick={loadMore}
                disabled={!notOver}
                style={{ width: "10rem" }}
                className="align-self-center m-4">Load more</button>
        </div>
    )
}

export default PokemonList;
