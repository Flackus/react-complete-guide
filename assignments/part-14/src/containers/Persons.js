import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPersonAddHandler: () => {
            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            };
            dispatch({ type: actionTypes.ADD_PERSON, person: newPerson });
        },
        onPersonDeleteHandler: (id) => dispatch({ type: actionTypes.DELETE_PERSON, id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
