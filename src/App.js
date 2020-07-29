import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {
                name: 'Max',
                age: 28
            },
            {
                name: 'Manu',
                age: 29
            },
            {
                name: 'Stephanie',
                age: 26
            }
        ]
    });

    const [otherState, _] = useState('Some other value');

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {
                    name: 'Maximilian',
                    age: 28
                },
                {
                    name: 'Manu',
                    age: 29
                },
                {
                    name: 'Stephanie',
                    age: 27
                }
            ]
        });
    }

    console.log(personsState, otherState);

    return (
        <div className="App">
            <h1>Hi, I'm a React app</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
};

export default app;
