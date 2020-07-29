import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <p className='UserOutput'>{props.username}</p>
    );
};

export default userOutput;
