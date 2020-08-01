import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
    const buttonClass = props.showPersons ? classes.Red : '';

    const assignedClasses = [];
    const personsLength = props.persons.length;
    if (personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;
