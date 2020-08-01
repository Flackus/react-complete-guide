import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
            console.log('Saved data');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup 2nd useEffect');
        }
    });

    const buttonClass = props.showPersons ? classes.Red : '';

    const assignedClasses = [];
    const personsLength = props.personsLength;
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

export default React.memo(cockpit);
