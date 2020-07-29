import React from 'react';

const userInput = (props) => {
    const inputTestStyle = {
        border: '1px solid blue'
    };

    return (
        <input
            type='text'
            value={props.username}
            onChange={props.onChangeHandler}
            style={inputTestStyle}
        />
    );
};

export default userInput;
