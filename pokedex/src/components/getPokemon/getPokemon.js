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
