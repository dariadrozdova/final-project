import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function MainPage() {
    const [name, setName] = useLocalStorage('name', 'Pokemon Hunter');

    return (
            <Container style={{maxWidth: "80%"}}>
                <Jumbotron style={{backgroundColor: "rgba(255, 255, 255, 0.85)", margin: "10rem 0"}}>
                    <Row className="justify-content-md-center">
                        <InputGroup style={{width: "40%"}} size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="display-3" style={{backgroundColor: "paleturquoise"}}>Welcome to Pokédex,</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                style={{minWidth: "12rem", backgroundColor: "rgba(175, 238, 238, 0.3)"}}
                                size="12"
                                type="text"
                                placeholder="enter your name"
                                id="inputDefault"
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                            <InputGroup.Append>
                                <InputGroup.Text style={{backgroundColor: "paleturquoise"}}>!</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>
                    <hr className="my-4"></hr>
                    <Row className="justify-content-md-center">
                        <p className="lead">This application is about Pokémon.
                            Here you can see the full list of Pokémon as well as catch the ones you like.</p>
                    </Row>
                </Jumbotron>
            </Container>
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
