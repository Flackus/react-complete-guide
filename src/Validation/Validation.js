import React from 'react';

const validation = (props) => {
    const validationMessage = props.length > 5 ? 'Text long enough' : 'Text too short';

    return (
        <div className="Validation">
            {validationMessage}
        </div>
    );
};

export default validation;
