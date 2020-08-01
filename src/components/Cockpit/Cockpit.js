import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleButtonRef.current.click();
        return () => {
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
                ref={toggleButtonRef}
                className={buttonClass}
                onClick={props.clicked}>Toggle persons</button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);
