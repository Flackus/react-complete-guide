import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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
        showPersons: false,
        userInput: ''
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

    inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
    }

    removeCharHandler = (_, index) => {
        const value = this.state.userInput;
        this.setState({userInput: value.substring(0, index) + value.substring(index + 1)});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
        }

        return (
            <div className='App'>
                <h1>Hi, I'm a React app</h1>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
                {persons}
                <div className='form'>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.inputChangeHandler} />
                    <p>{this.state.userInput.length}</p>
                    <Validation
                        length={this.state.userInput.length} />
                    <div>
                        {this.state.userInput.split('').map((char, index) => {
                            return <Char
                                click={(event) => this.removeCharHandler(event, index)}
                                key={index}>
                                {char}
                            </Char>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
