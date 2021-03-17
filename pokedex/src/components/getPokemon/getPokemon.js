export function getPokemon (setPokemon, server, processing) {
    let abortController = new AbortController();
    fetch(server, {signal: abortController.signal})
        .then(response => response.json())
        .then(processing);
    return () => abortController.abort();
}

export function getPokemonById(server, setPokemon, setCaught) {
    fetch(server)
        .then(response => response.json())
        .then(json => {
                setPokemon(json);
                setCaught(json.caught);
            }
        )
}

export function catchPokemon (pokemonId, pokemonName, setCaught) {
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
