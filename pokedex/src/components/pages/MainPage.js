import React, { useState, useEffect } from "react";

function MainPage() {
    const [caught, setCaught] = useState(0);
    const [name, setName] = useLocalStorage('name', 'Pokemon Hunter');

    return (
        <div className="jumbotron">
            <div className="display-3">
            Welcome to Pokédex, <input
                size="12"
                type="text"
                className="text-secondary"
                placeholder="Enter your name"
                id="inputDefault"
                value={name}
                onChange={e => setName(e.target.value)}
                />!
            </div>
            <hr className="my-4"></hr>
            <p className="lead">This application is about Pokémon.
                Here you can see the full list of Pokémon as well as catch the ones you like.</p>
        </div>
    );
}


function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export default MainPage;
