import React, { Component } from 'react';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import classes from './App.css';

class App extends Component {
    state = {
        persons: [
            {
                id: 1,
                name: 'Max',
                age: 28
            },
            {
                id: 2,
                name: 'Manu',
                age: 29
            },
            {
                id: 3,
                name: 'Stephanie',
                age: 26
            }
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((person) => person.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;
        const buttonClasses = [classes.Button];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id}>
                                <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    changed={(event) => this.nameChangedHandler(event, person.id)} />
                            </ErrorBoundary>
                        );
                    })}
                </div>
            );
            buttonClasses.push(classes.Red);
        }

        const assignedClasses = [];
        const personsLength = this.state.persons.length;
        if (personsLength <= 2) {
            assignedClasses.push(classes.red);
        }
        if (personsLength <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React app</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                    className={buttonClasses.join(' ')}
                    onClick={this.togglePersonsHandler}>Toggle persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
